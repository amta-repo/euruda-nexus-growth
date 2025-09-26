import HeroSection from "@/components/Home/HeroSection";
import TrustSection from "@/components/Home/TrustSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText, Users, DollarSign, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import businessPlansImg from "@/assets/business-plans-service.png";
import teamDevImg from "@/assets/team-development-service.png";
import financingImg from "@/assets/financing-service.png";
import projectMgmtImg from "@/assets/project-management-service.png";

interface IndexProps {
  language: "fr" | "en";
}

const Index = ({ language }: IndexProps) => {
  const content = {
    fr: {
      servicesTitle: "Nos Services d'Excellence",
      servicesSubtitle: "Solutions complètes pour transformer votre entreprise et atteindre vos objectifs stratégiques",
      viewAllServices: "Voir tous nos services",
      services: [
        {
          title: "Plans d'Affaires",
          description: "Obtenez un financement avec nos plans d'affaires professionnels et convaincants",
          image: businessPlansImg,
          icon: FileText,
          features: ["Étude de marché", "Projections financières", "Stratégie marketing"]
        },
        {
          title: "Développement d'Équipe", 
          description: "Maximisez la performance de vos équipes avec nos formations sur mesure",
          image: teamDevImg,
          icon: Users,
          features: ["Leadership", "Communication", "Productivité"]
        },
        {
          title: "Conseil Financier",
          description: "Plans de financement et remboursement adaptés à vos besoins spécifiques",
          image: financingImg,
          icon: DollarSign,
          features: ["Structuration financière", "Négociation", "Suivi"]
        },
        {
          title: "Maîtrise d'Ouvrage",
          description: "Expertise projet pour garantir le succès de vos initiatives stratégiques",
          image: projectMgmtImg,
          icon: Briefcase,
          features: ["Planification", "Exécution", "Contrôle qualité"]
        }
      ]
    },
    en: {
      servicesTitle: "Our Excellence Services",
      servicesSubtitle: "Complete solutions to transform your business and achieve your strategic objectives",
      viewAllServices: "View all services",
      services: [
        {
          title: "Business Plans",
          description: "Get financing with our professional and compelling business plans",
          image: businessPlansImg,
          icon: FileText,
          features: ["Market research", "Financial projections", "Marketing strategy"]
        },
        {
          title: "Team Development",
          description: "Maximize your team's performance with our customized training programs",
          image: teamDevImg,
          icon: Users,
          features: ["Leadership", "Communication", "Productivity"]
        },
        {
          title: "Financial Advisory",
          description: "Financing and repayment plans tailored to your specific needs",
          image: financingImg,
          icon: DollarSign,
          features: ["Financial structuring", "Negotiation", "Monitoring"]
        },
        {
          title: "Project Management",
          description: "Project expertise to guarantee the success of your strategic initiatives",
          image: projectMgmtImg,
          icon: Briefcase,
          features: ["Planning", "Execution", "Quality control"]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <HeroSection language={language} />
      <TrustSection language={language} />
      
      {/* Enhanced Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
              {t.servicesTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {t.services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-premium transition-all duration-300 bg-gradient-to-br from-white to-muted/50">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary-light transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {language === "fr" ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="gradient-hero hover:shadow-glow text-lg px-8 py-6" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>{t.viewAllServices}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
