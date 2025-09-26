import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceModal from "@/components/ServiceModal";
import { FileText, Users, DollarSign, Briefcase, Phone, Mail } from "lucide-react";
import businessPlansImg from "@/assets/business-plans-service.png";
import teamDevImg from "@/assets/team-development-service.png";
import financingImg from "@/assets/financing-service.png";
import projectMgmtImg from "@/assets/project-management-service.png";

interface ServicesProps {
  language: "fr" | "en";
}

const Services = ({ language }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const content = {
    fr: {
      title: "Nos Services",
      subtitle: "Des solutions sur-mesure pour transformer votre entreprise",
      services: [
        {
          id: "business-plans",
          icon: FileText,
          title: "Plans d'Affaires",
          description: "Élaboration de plans d'affaires professionnels pour obtenir un financement et développer votre entreprise",
          details: "Nous vous accompagnons dans la rédaction complète de vos plans d'affaires pour maximiser vos chances d'obtenir un financement auprès des banques et investisseurs.",
          detailedDescription: "Notre service d'élaboration de business plans vous accompagne dans la création d'un document stratégique complet et professionnel. Nous analysons votre marché, définissons votre modèle économique, et créons des projections financières réalistes pour convaincre investisseurs et partenaires.",
          image: businessPlansImg,
          features: [
            "Analyse de marché approfondie",
            "Modélisation financière complète",
            "Stratégie de financement",
            "Plan opérationnel détaillé"
          ],
          benefits: [
            "Document professionnel pour les investisseurs",
            "Clarification de votre vision d'entreprise",
            "Identification des risques et opportunités",
            "Projections financières réalistes"
          ],
          process: [
            "Entretien initial et analyse de vos besoins",
            "Étude de marché et analyse concurrentielle",
            "Développement du modèle économique",
            "Création des projections financières",
            "Rédaction et finalisation du business plan"
          ],
          deliverables: [
            "Business plan complet (30-50 pages)",
            "Modèle financier Excel",
            "Présentation PowerPoint exécutive",
            "Guide d'utilisation et recommandations"
          ],
          duration: "4-8 semaines selon la complexité",
          pricing: "À partir de 500 000 FCFA"
        },
        {
          id: "team-development",
          icon: Users,
          title: "Développement d'Équipe",
          description: "Ne soyez pas seulement dynamique, soyez maxi dynamique ! Formation et coaching d'équipes performantes",
          details: "Nous aidons vos équipes à atteindre leur plein potentiel à travers des programmes de formation et de développement organisationnel.",
          detailedDescription: "Notre programme de développement d'équipes vise à optimiser les performances collectives et individuelles de vos collaborateurs. Nous proposons des formations sur mesure, du coaching personnalisé et des outils concrets pour améliorer la productivité et le bien-être au travail.",
          image: teamDevImg,
          features: [
            "Formation personnalisée des équipes",
            "Coaching individuel des managers",
            "Développement des compétences leadership",
            "Amélioration de la communication interne"
          ],
          benefits: [
            "Amélioration de la productivité des équipes",
            "Réduction du turnover",
            "Meilleure communication interne",
            "Développement des compétences leadership"
          ],
          process: [
            "Diagnostic des besoins en formation",
            "Conception du programme personnalisé",
            "Mise en œuvre des formations",
            "Coaching individuel des managers",
            "Évaluation et suivi des progrès"
          ],
          deliverables: [
            "Programme de formation personnalisé",
            "Supports de formation et outils",
            "Sessions de coaching individuel",
            "Rapport d'évaluation des compétences"
          ],
          duration: "3-12 mois selon les besoins",
          pricing: "À partir de 300 000 FCFA par mois"
        },
        {
          id: "financial-advisory",
          icon: DollarSign,
          title: "Conseil Financier",
          description: "Solutions de financement pour démarrer et développer vos projets d'entreprise",
          details: "Confiez-nous la rédaction de vos plans de financement et de remboursement pour sécuriser les fonds nécessaires à votre croissance.",
          detailedDescription: "Notre service de conseil financier vous aide à optimiser votre structure financière, à identifier les meilleures sources de financement et à négocier avec les investisseurs. Nous vous accompagnons dans toutes vos décisions financières stratégiques.",
          image: financingImg,
          features: [
            "Structuration du financement",
            "Négociation avec les investisseurs",
            "Optimisation fiscale",
            "Gestion des risques financiers"
          ],
          benefits: [
            "Accès facilité aux financements",
            "Optimisation des coûts financiers",
            "Amélioration de la rentabilité",
            "Réduction des risques financiers"
          ],
          process: [
            "Audit financier complet",
            "Identification des besoins de financement",
            "Recherche et sélection des partenaires financiers",
            "Négociation des conditions",
            "Suivi et optimisation continue"
          ],
          deliverables: [
            "Rapport d'audit financier",
            "Plan de financement structuré",
            "Dossier de présentation aux investisseurs",
            "Recommandations d'optimisation"
          ],
          duration: "2-6 mois selon la complexité",
          pricing: "À partir de 400 000 FCFA"
        },
        {
          id: "project-management",
          icon: Briefcase,
          title: "Maîtrise d'Ouvrage",
          description: "Gestion complète de vos projets avec l'expertise de nos consultants spécialisés",
          details: "Rapprochez-vous de nos experts pour la conception, la planification et l'exécution de vos projets stratégiques.",
          detailedDescription: "Notre expertise en gestion de projets vous garantit une exécution efficace de vos initiatives stratégiques. Nous utilisons les meilleures pratiques et outils de gestion pour assurer le succès de vos projets dans les délais et budgets impartis.",
          image: projectMgmtImg,
          features: [
            "Planification et suivi de projets",
            "Gestion des ressources et budgets",
            "Coordination des équipes projet",
            "Analyse des risques et mitigation"
          ],
          benefits: [
            "Respect des délais et budgets",
            "Amélioration de la qualité des livrables",
            "Réduction des risques projet",
            "Optimisation des ressources"
          ],
          process: [
            "Définition du scope et des objectifs",
            "Planification détaillée du projet",
            "Mise en place des équipes et processus",
            "Suivi et contrôle de l'avancement",
            "Clôture et capitalisation"
          ],
          deliverables: [
            "Plan de projet détaillé",
            "Outils de suivi et reporting",
            "Tableaux de bord de pilotage",
            "Rapport de clôture et recommandations"
          ],
          duration: "Variable selon le projet",
          pricing: "À partir de 200 000 FCFA par mois"
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
          id: "business-plans",
          icon: FileText,
          title: "Business Plans",
          description: "Professional business plan development to secure financing and grow your business",
          details: "We assist you in crafting comprehensive business plans to maximize your chances of obtaining financing from banks and investors.",
          detailedDescription: "Our business plan development service supports you in creating a complete and professional strategic document. We analyze your market, define your business model, and create realistic financial projections to convince investors and partners.",
          image: businessPlansImg,
          features: [
            "Market analysis and competitive study",
            "Complete financial modeling",
            "Financing strategy",
            "Detailed operational plan"
          ],
          benefits: [
            "Professional document for investors",
            "Clarification of your business vision",
            "Risk and opportunity identification",
            "Realistic financial projections"
          ],
          process: [
            "Initial interview and needs analysis",
            "Market research and competitive analysis",
            "Business model development",
            "Financial projections creation",
            "Writing and finalization of business plan"
          ],
          deliverables: [
            "Complete business plan (30-50 pages)",
            "Excel financial model",
            "Executive PowerPoint presentation",
            "User guide and recommendations"
          ],
          duration: "4-8 weeks depending on complexity",
          pricing: "Starting from 500,000 FCFA"
        },
        {
          id: "team-development",
          icon: Users,
          title: "Team Development",
          description: "Don't just be dynamic, be maximally dynamic! Training and coaching for high-performing teams",
          details: "We help your teams reach their full potential through comprehensive training and organizational development programs.",
          detailedDescription: "Our team development program aims to optimize the collective and individual performance of your employees. We offer customized training, personalized coaching and concrete tools to improve productivity and well-being at work.",
          image: teamDevImg,
          features: [
            "Personalized team training",
            "Individual coaching for managers", 
            "Leadership skills development",
            "Internal communication improvement"
          ],
          benefits: [
            "Improved team productivity",
            "Reduced turnover",
            "Better internal communication",
            "Leadership skills development"
          ],
          process: [
            "Training needs diagnosis",
            "Personalized program design",
            "Training implementation",
            "Individual coaching for managers",
            "Progress evaluation and follow-up"
          ],
          deliverables: [
            "Personalized training program",
            "Training materials and tools",
            "Individual coaching sessions",
            "Skills assessment report"
          ],
          duration: "3-12 months depending on needs",
          pricing: "Starting from 300,000 FCFA per month"
        },
        {
          id: "financial-advisory",
          icon: DollarSign,
          title: "Financial Advisory",
          description: "Financing solutions to start and develop your business projects",
          details: "Entrust us with drafting your financing and repayment plans to secure the funds needed for your growth.",
          detailedDescription: "Our financial advisory service helps you optimize your financial structure, identify the best funding sources and negotiate with investors. We support you in all your strategic financial decisions.",
          image: financingImg,
          features: [
            "Financing structuring",
            "Investor negotiations",
            "Tax optimization",
            "Financial risk management"
          ],
          benefits: [
            "Easier access to financing",
            "Financial cost optimization",
            "Improved profitability",
            "Reduced financial risks"
          ],
          process: [
            "Complete financial audit",
            "Financing needs identification",
            "Search and selection of financial partners",
            "Terms negotiation",
            "Continuous monitoring and optimization"
          ],
          deliverables: [
            "Financial audit report",
            "Structured financing plan",
            "Investor presentation file",
            "Optimization recommendations"
          ],
          duration: "2-6 months depending on complexity",
          pricing: "Starting from 400,000 FCFA"
        },
        {
          id: "project-management",
          icon: Briefcase,
          title: "Project Management",
          description: "Complete project management with the expertise of our specialized consultants",
          details: "Connect with our experts for the design, planning and execution of your strategic projects.",
          detailedDescription: "Our project management expertise guarantees efficient execution of your strategic initiatives. We use best practices and management tools to ensure the success of your projects within the allocated timeframes and budgets.",
          image: projectMgmtImg,
          features: [
            "Project planning and monitoring",
            "Resource and budget management",
            "Project team coordination",
            "Risk analysis and mitigation"
          ],
          benefits: [
            "Meeting deadlines and budgets",
            "Improved deliverable quality",
            "Reduced project risks",
            "Resource optimization"
          ],
          process: [
            "Scope and objectives definition",
            "Detailed project planning",
            "Team and process setup",
            "Progress monitoring and control",
            "Closure and capitalization"
          ],
          deliverables: [
            "Detailed project plan",
            "Monitoring and reporting tools",
            "Management dashboards",
            "Closure report and recommendations"
          ],
          duration: "Variable depending on project",
          pricing: "Starting from 200,000 FCFA per month"
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
                
                <Button 
                  className="w-full mt-6"
                  onClick={() => setSelectedService(service.id)}
                >
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

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={t.services.find(s => s.id === selectedService)!}
          language={language}
        />
      )}
    </div>
  );
};

export default Services;