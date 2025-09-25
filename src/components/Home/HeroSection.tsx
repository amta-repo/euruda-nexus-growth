import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-consulting.jpg";

interface HeroSectionProps {
  language: "fr" | "en";
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    fr: {
      headline: "Transformez votre entreprise avec",
      company: "EURUDA CONSEIL",
      subheadline: "Votre partenaire de confiance en conseil en gestion et stratégie d'entreprise",
      description: "Nous accompagnons les dirigeants d'entreprises dans leurs défis stratégiques, financiers et organisationnels pour maximiser leur performance et assurer leur croissance durable.",
      ctaPrimary: "Consultation Gratuite",
      ctaSecondary: "Découvrir nos Services",
      trustPoints: [
        { icon: Users, text: "Plus de 150 clients accompagnés" },
        { icon: TrendingUp, text: "Croissance moyenne de 35%" },
        { icon: Award, text: "15+ ans d'expérience" }
      ],
      benefits: [
        "Stratégie personnalisée selon vos objectifs",
        "Accompagnement sur-mesure par nos experts",
        "Résultats mesurables et durables",
        "Confidentialité et professionnalisme garantis"
      ]
    },
    en: {
      headline: "Transform your business with",
      company: "EURUDA CONSEIL",
      subheadline: "Your trusted partner in business management and strategy consulting",
      description: "We support business leaders in their strategic, financial and organizational challenges to maximize their performance and ensure sustainable growth.",
      ctaPrimary: "Free Consultation",
      ctaSecondary: "Discover our Services",
      trustPoints: [
        { icon: Users, text: "150+ clients supported" },
        { icon: TrendingUp, text: "35% average growth" },
        { icon: Award, text: "15+ years experience" }
      ],
      benefits: [
        "Personalized strategy according to your goals",
        "Tailor-made support by our experts",
        "Measurable and sustainable results",
        "Guaranteed confidentiality and professionalism"
      ]
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">{t.headline}</span>
                <br />
                <span className="gradient-hero bg-clip-text text-transparent">
                  {t.company}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium">
                {t.subheadline}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-hero hover:shadow-glow transition-all text-lg px-8 py-6"
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 hover:bg-secondary"
                asChild
              >
                <Link to="/services">
                  {t.ctaSecondary}
                </Link>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {t.trustPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-card border">
                  <point.icon className="h-6 w-6 text-gold" />
                  <span className="text-sm font-medium text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="overflow-hidden shadow-premium animate-float">
                <img 
                  src={heroImage} 
                  alt="EURUDA CONSEIL - Professional Business Consulting"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 gradient-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-hero rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gold rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;