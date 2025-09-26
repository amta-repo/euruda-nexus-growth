import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

interface ContactProps {
  language: "fr" | "en";
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const content = {
    fr: {
      title: "Contactez-Nous",
      subtitle: "Prêt à transformer votre entreprise ?",
      description: "Commencez par une consultation gratuite avec nos experts certifiés",
      form: {
        name: "Nom complet",
        email: "Email professionnel",
        phone: "Téléphone",
        company: "Entreprise",
        service: "Service souhaité",
        message: "Décrivez votre projet",
        submit: "Demander une consultation gratuite"
      },
      services: [
        "Plans d'Affaires",
        "Développement d'Équipe",
        "Conseil Financier",
        "Maîtrise d'Ouvrage",
        "Audit & Diagnostic",
        "Autre"
      ],
      contact: {
        address: "Cotonou, République du Bénin",
        phone: "+229 97 84 84 19",
        email: "contact@eurudaconseil.com",
        hours: "Lun-Ven: 8h00-18h00"
      },
      whatsapp: "WhatsApp"
    },
    en: {
      title: "Contact Us",
      subtitle: "Ready to transform your business?",
      description: "Start with a free consultation with our certified experts",
      form: {
        name: "Full name",
        email: "Professional email",
        phone: "Phone",
        company: "Company",
        service: "Desired service",
        message: "Describe your project",
        submit: "Request a free consultation"
      },
      services: [
        "Business Plans",
        "Team Development",
        "Financial Advisory",
        "Project Management",
        "Audit & Diagnosis",
        "Other"
      ],
      contact: {
        address: "Cotonou, Republic of Benin",
        phone: "+229 97 84 84 19",
        email: "contact@eurudaconseil.com",
        hours: "Mon-Fri: 8AM-6PM"
      },
      whatsapp: "WhatsApp"
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-2xl font-semibold text-primary mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-premium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">{t.form.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">{t.form.company}</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">{t.form.service}</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">{language === "fr" ? "Sélectionnez un service" : "Select a service"}</option>
                    {t.services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1"
                    required
                  />
                </div>

                <Button type="submit" className="w-full gradient-hero hover:shadow-glow text-lg py-6">
                  {t.form.submit}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">
                {language === "fr" ? "Informations de Contact" : "Contact Information"}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">EURUDA CONSEIL</div>
                    <div className="text-muted-foreground">{t.contact.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href={`tel:${t.contact.phone}`} className="text-foreground hover:text-primary transition-colors">
                    {t.contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${t.contact.email}`} className="text-foreground hover:text-primary transition-colors">
                    {t.contact.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{t.contact.hours}</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6 pt-6 border-t">
                <a
                  href={`https://wa.me/22997848419?text=${encodeURIComponent(language === "fr" ? "Bonjour, je souhaite une consultation gratuite avec EURUDA CONSEIL." : "Hello, I would like a free consultation with EURUDA CONSEIL.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>{t.whatsapp}</span>
                </a>
              </div>
            </Card>

            {/* Google Maps */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">
                {language === "fr" ? "Notre Localisation" : "Our Location"}
              </h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0239473329695!2d2.3277264!3d6.4333459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9c863b9afef%3A0x4a03a90e6fa0c4c6!2sEURUDA%20CONSEIL!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EURUDA CONSEIL Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;