import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, DollarSign, Briefcase, Phone, Mail } from "lucide-react";
import businessPlansImg from "@/assets/business-plans-service.png";
import teamDevImg from "@/assets/team-development-service.png";
import financingImg from "@/assets/financing-service.png";
import projectMgmtImg from "@/assets/project-management-service.png";

interface ServicesProps {
  language: "fr" | "en";
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    fr: {
      title: "Nos Services",
      subtitle: "Des solutions sur-mesure pour transformer votre entreprise",
      services: [
        {
          icon: FileText,
          title: "Plans d'Affaires",
          description: "Élaboration de plans d'affaires professionnels pour obtenir un financement et développer votre entreprise",
          details: "Nous vous accompagnons dans la rédaction complète de vos plans d'affaires pour maximiser vos chances d'obtenir un financement auprès des banques et investisseurs.",
          image: businessPlansImg,
          features: [
            "Analyse de marché approfondie",
            "Projections financières détaillées", 
            "Stratégie commerciale personnalisée",
            "Présentation professionnelle"
          ]
        },
        {
          icon: Users,
          title: "Développement d'Équipe",
          description: "Ne soyez pas seulement dynamique, soyez maxi dynamique ! Formation et coaching d'équipes performantes",
          details: "Nous aidons vos équipes à atteindre leur plein potentiel à travers des programmes de formation et de développement organisationnel.",
          image: teamDevImg,
          features: [
            "Formation en leadership",
            "Team building professionnel",
            "Amélioration de la communication",
            "Gestion des performances"
          ]
        },
        {
          icon: DollarSign,
          title: "Conseil Financier",
          description: "Solutions de financement pour démarrer et développer vos projets d'entreprise",
          details: "Confiez-nous la rédaction de vos plans de financement et de remboursement pour sécuriser les fonds nécessaires à votre croissance.",
          image: financingImg,
          features: [
            "Plans de financement personnalisés",
            "Stratégies de remboursement",
            "Recherche d'investisseurs",
            "Optimisation fiscale"
          ]
        },
        {
          icon: Briefcase,
          title: "Maîtrise d'Ouvrage",
          description: "Gestion complète de vos projets avec l'expertise de nos consultants spécialisés",
          details: "Rapprochez-vous de nos experts pour la conception, la planification et l'exécution de vos projets stratégiques.",
          image: projectMgmtImg,
          features: [
            "Gestion de projet complète",
            "Expertise sectorielle",
            "Suivi et évaluation",
            "Optimisation des processus"
          ]
        }
      ],
      cta: {
        title: "Prêt à transformer votre entreprise ?",
        subtitle: "Contactez nos experts dès aujourd'hui",
        button: "Demander un Devis",
        phone: "Appelez-nous"
      }
    },
    en: {
      title: "Our Services",
      subtitle: "Customized solutions to transform your business",
      services: [
        {
          icon: FileText,
          title: "Business Plans",
          description: "Professional business plan development to secure financing and grow your business",
          details: "We assist you in crafting comprehensive business plans to maximize your chances of obtaining financing from banks and investors.",
          image: businessPlansImg,
          features: [
            "In-depth market analysis",
            "Detailed financial projections",
            "Customized commercial strategy", 
            "Professional presentation"
          ]
        },
        {
          icon: Users,
          title: "Team Development",
          description: "Don't just be dynamic, be maximally dynamic! Training and coaching for high-performing teams",
          details: "We help your teams reach their full potential through comprehensive training and organizational development programs.",
          image: teamDevImg,
          features: [
            "Leadership training",
            "Professional team building",
            "Communication improvement",
            "Performance management"
          ]
        },
        {
          icon: DollarSign,
          title: "Financial Advisory",
          description: "Financing solutions to start and develop your business projects",
          details: "Entrust us with drafting your financing and repayment plans to secure the funds needed for your growth.",
          image: financingImg,
          features: [
            "Customized financing plans",
            "Repayment strategies",
            "Investor sourcing",
            "Tax optimization"
          ]
        },
        {
          icon: Briefcase,
          title: "Project Management",
          description: "Complete project management with the expertise of our specialized consultants",
          details: "Connect with our experts for the design, planning and execution of your strategic projects.",
          image: projectMgmtImg,
          features: [
            "Complete project management",
            "Sector expertise",
            "Monitoring and evaluation", 
            "Process optimization"
          ]
        }
      ],
      cta: {
        title: "Ready to transform your business?",
        subtitle: "Contact our experts today",
        button: "Request a Quote",
        phone: "Call Us"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{t.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {t.services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.details}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6">
                  {language === "fr" ? "En savoir plus" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8">
              <Mail className="mr-2 h-5 w-5" />
              {t.cta.button}
            </Button>
            
            <Button size="lg" variant="outline" className="px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              {t.cta.phone}: +229 94043473
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            <p>📍 Tankpè Calavi non loin du collège pharaon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;