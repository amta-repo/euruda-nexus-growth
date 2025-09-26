import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Users, Award, Shield } from "lucide-react";

interface TrustSectionProps {
  language: "fr" | "en";
}

const TrustSection = ({ language }: TrustSectionProps) => {
  const content = {
    fr: {
      title: "Ils nous font confiance",
      subtitle: "Rejoignez les entreprises qui transforment leur performance avec EURUDA CONSEIL",
      testimonials: [
        {
          name: "Marie Adjignon",
          role: "Directrice Générale, SOBEBRA",
          content: "EURUDA CONSEIL a révolutionné notre approche stratégique. Grâce à leur expertise, notre croissance s'est accélérée de 45% en 18 mois.",
          rating: 5
        },
        {
          name: "Jean-Baptiste Koffi",
          role: "PDG, Groupe CERCO",
          content: "L'accompagnement d'EURUDA pour notre plan d'affaires nous a permis de lever 2 milliards FCFA. Professionnalisme remarquable.",
          rating: 5
        },
        {
          name: "Aminata Diallo",
          role: "DRH, Bank of Africa Bénin",
          content: "Formation exceptionnelle de nos équipes. Le programme de développement organisationnel a transformé notre culture d'entreprise.",
          rating: 5
        }
      ],
      partners: [
        { name: "SOBEBRA", logo: "🏢" },
        { name: "Bank of Africa", logo: "🏦" },
        { name: "CERCO Group", logo: "🏭" },
        { name: "CFAO Motors", logo: "🚗" },
        { name: "Coris Bank", logo: "💳" },
        { name: "Oragroup", logo: "🏛️" }
      ],
      certifications: [
        { name: "ISO 9001:2015", icon: Shield },
        { name: "Expertise Comptable", icon: Award },
        { name: "Management Certifié", icon: TrendingUp }
      ]
    },
    en: {
      title: "They trust us",
      subtitle: "Join companies transforming their performance with EURUDA CONSEIL",
      testimonials: [
        {
          name: "Marie Adjignon",
          role: "General Manager, SOBEBRA",
          content: "EURUDA CONSEIL revolutionized our strategic approach. Thanks to their expertise, our growth accelerated by 45% in 18 months.",
          rating: 5
        },
        {
          name: "Jean-Baptiste Koffi",
          role: "CEO, CERCO Group",
          content: "EURUDA's support for our business plan enabled us to raise 2 billion FCFA. Remarkable professionalism.",
          rating: 5
        },
        {
          name: "Aminata Diallo",
          role: "HR Director, Bank of Africa Benin",
          content: "Exceptional team training. The organizational development program transformed our corporate culture.",
          rating: 5
        }
      ],
      partners: [
        { name: "SOBEBRA", logo: "🏢" },
        { name: "Bank of Africa", logo: "🏦" },
        { name: "CERCO Group", logo: "🏭" },
        { name: "CFAO Motors", logo: "🚗" },
        { name: "Coris Bank", logo: "💳" },
        { name: "Oragroup", logo: "🏛️" }
      ],
      certifications: [
        { name: "ISO 9001:2015", icon: Shield },
        { name: "Certified Accounting", icon: Award },
        { name: "Certified Management", icon: TrendingUp }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity">
            {t.partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <div className="text-xs font-medium text-muted-foreground">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-shadow bg-white">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {t.certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-primary/30">
                <cert.icon className="h-4 w-4 mr-2 text-primary" />
                {cert.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;