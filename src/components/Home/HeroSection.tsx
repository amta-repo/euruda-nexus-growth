import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Award, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-consulting.jpg";

interface HeroSectionProps {
  language: "fr" | "en";
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    fr: {
      headline: "Transformez votre entreprise",
      tagline: "Conseil stratégique de classe mondiale",
      description: "Maximisez votre performance avec nos experts certifiés",
      ctaPrimary: "Consultation Gratuite",
      ctaPhone: "+229 97 84 84 19",
      stats: [
        { value: "150+", label: "Clients" },
        { value: "35%", label: "Croissance Moy." },
        { value: "15+", label: "Années d'Exp." }
      ]
    },
    en: {
      headline: "Transform Your Business",
      tagline: "World-class strategic consulting",
      description: "Maximize your performance with our certified experts",
      ctaPrimary: "Free Consultation",
      ctaPhone: "+229 97 84 84 19",
      stats: [
        { value: "150+", label: "Clients" },
        { value: "35%", label: "Avg. Growth" },
        { value: "15+", label: "Years Exp." }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Star className="h-4 w-4 text-gold mr-2" />
                <span className="text-sm font-medium text-primary">{t.tagline}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-hero bg-clip-text text-transparent">
                  {t.headline}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-hero hover:shadow-glow transition-all text-lg px-8 py-6 font-semibold"
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
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all"
                asChild
              >
                <a href={`tel:${t.ctaPhone}`} className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{t.ctaPhone}</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Card */}
              <Card className="overflow-hidden shadow-premium animate-float bg-gradient-to-br from-white to-muted/50">
                <img 
                  src={heroImage} 
                  alt="EURUDA CONSEIL - Professional Business Consulting Team"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </Card>
              
              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-premium p-6 animate-slide-up delay-300">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">C</div>
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm">E</div>
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center text-white font-bold text-sm">+</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {language === "fr" ? "Clients Satisfaits" : "Happy Clients"}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-gold text-gold" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 gradient-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 gradient-hero rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;