import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Youtube,
  Rss
} from "lucide-react";

interface FooterProps {
  language: "fr" | "en";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    fr: {
      company: "EURUDA CONSEIL",
      tagline: "Votre partenaire de confiance en conseil en gestion d'entreprise",
      quickLinks: "Liens Rapides",
      services: "Nos Services",
      contact: "Contact",
      followUs: "Suivez-nous",
      address: "Cotonou, République du Bénin",
      phone: "+229 97 12 34 56",
      email: "contact@eurudaconseil.com",
      copyright: "© 2025 EURUDA CONSEIL. Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      links: [
        { name: "Accueil", href: "/" },
        { name: "À Propos", href: "/about" },
        { name: "Études de Cas", href: "/case-studies" },
        { name: "FAQ", href: "/faq" }
      ],
      servicesList: [
        { name: "Stratégie d'Entreprise", href: "/services#strategy" },
        { name: "Conseil Financier", href: "/services#financial" },
        { name: "Développement RH", href: "/services#hr" },
        { name: "Transformation Digitale", href: "/services#digital" }
      ]
    },
    en: {
      company: "EURUDA CONSEIL",
      tagline: "Your trusted partner in business management consulting",
      quickLinks: "Quick Links",
      services: "Our Services",
      contact: "Contact",
      followUs: "Follow Us",
      address: "Cotonou, Republic of Benin",
      phone: "+229 97 12 34 56",
      email: "contact@eurudaconseil.com",
      copyright: "© 2025 EURUDA CONSEIL. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQ", href: "/faq" }
      ],
      servicesList: [
        { name: "Business Strategy", href: "/services#strategy" },
        { name: "Financial Advisory", href: "/services#financial" },
        { name: "HR Development", href: "/services#hr" },
        { name: "Digital Transformation", href: "/services#digital" }
      ]
    }
  };

  const t = content[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-accent rounded-lg p-2">
                <div className="h-6 w-6 bg-background rounded-sm"></div>
              </div>
              <div>
                <span className="text-lg font-bold text-gold">{t.company}</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t.tagline}
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">{t.followUs}</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gold/20">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gold/20">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gold/20">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gold/20">
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gold/20" asChild>
                  <a href="/rss.xml" title="RSS Feed">
                    <Rss className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gold">{t.quickLinks}</h4>
            <nav className="space-y-2">
              {t.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gold">{t.services}</h4>
            <nav className="space-y-2">
              {t.servicesList.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gold">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-gold flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">{t.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <a 
                  href={`tel:${t.phone.replace(/\s/g, '')}`}
                  className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  {t.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <a 
                  href={`mailto:${t.email}`}
                  className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button 
              variant="outline" 
              size="sm"
              className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-primary"
              asChild
            >
              <a 
                href="https://wa.me/22997123456?text=Bonjour,%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services%20de%20conseil"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            {t.copyright}
          </p>
          
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-primary-foreground/60 hover:text-gold transition-colors"
            >
              {t.privacy}
            </Link>
            <Link 
              to="/terms" 
              className="text-primary-foreground/60 hover:text-gold transition-colors"
            >
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;