import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

interface CaseStudiesProps {
  language: "fr" | "en";
}

const CaseStudies = ({ language }: CaseStudiesProps) => {
  const content = {
    fr: {
      title: "Études de Cas",
      subtitle: "Découvrez nos succès et les résultats obtenus pour nos clients",
      caseStudies: [
        {
          title: "Transformation Digitale d'une PME Textile",
          client: "Entreprise Textile ABC",
          sector: "Textile",
          challenge: "Modernisation des processus et digitalisation des ventes",
          solution: "Mise en place d'un ERP intégré et d'une plateforme e-commerce",
          results: [
            "Augmentation du chiffre d'affaires de 45%",
            "Réduction des coûts opérationnels de 30%",
            "Amélioration de la productivité de 60%"
          ],
          duration: "8 mois",
          tags: ["Transformation Digitale", "E-commerce", "ERP"]
        },
        {
          title: "Restructuration Financière d'une Startup",
          client: "FinTech XYZ",
          sector: "Services Financiers",
          challenge: "Optimisation de la structure financière et recherche de financement",
          solution: "Plan de financement structuré et négociation avec les investisseurs",
          results: [
            "Levée de fonds de 2M€",
            "Amélioration du cash-flow de 80%",
            "Expansion sur 3 nouveaux marchés"
          ],
          duration: "6 mois",
          tags: ["Financement", "Restructuration", "Croissance"]
        },
        {
          title: "Développement RH d'une Entreprise Manufacturière",
          client: "Industries DEF",
          sector: "Manufacture",
          challenge: "Formation des équipes et amélioration du climat social",
          solution: "Programme de formation continue et mise en place d'outils RH",
          results: [
            "Réduction du turnover de 50%",
            "Augmentation de la satisfaction employé de 70%",
            "Amélioration de la performance de 35%"
          ],
          duration: "12 mois",
          tags: ["Formation", "RH", "Performance"]
        },
        {
          title: "Stratégie de Croissance pour une Chaîne de Distribution",
          client: "Distribution GHI",
          sector: "Commerce",
          challenge: "Expansion géographique et optimisation de la supply chain",
          solution: "Étude de marché approfondie et plan stratégique sur 5 ans",
          results: [
            "Ouverture de 15 nouveaux points de vente",
            "Optimisation logistique avec 25% d'économies",
            "Croissance du CA de 120% en 3 ans"
          ],
          duration: "18 mois",
          tags: ["Stratégie", "Expansion", "Logistique"]
        }
      ]
    },
    en: {
      title: "Case Studies",
      subtitle: "Discover our successes and results achieved for our clients",
      caseStudies: [
        {
          title: "Digital Transformation of a Textile SME",
          client: "Textile Company ABC",
          sector: "Textile",
          challenge: "Process modernization and sales digitalization",
          solution: "Implementation of integrated ERP and e-commerce platform",
          results: [
            "45% increase in revenue",
            "30% reduction in operational costs",
            "60% improvement in productivity"
          ],
          duration: "8 months",
          tags: ["Digital Transformation", "E-commerce", "ERP"]
        },
        {
          title: "Financial Restructuring of a Startup",
          client: "FinTech XYZ",
          sector: "Financial Services",
          challenge: "Financial structure optimization and funding search",
          solution: "Structured financing plan and investor negotiations",
          results: [
            "€2M funding raised",
            "80% cash-flow improvement",
            "Expansion to 3 new markets"
          ],
          duration: "6 months",
          tags: ["Funding", "Restructuring", "Growth"]
        },
        {
          title: "HR Development of a Manufacturing Company",
          client: "Industries DEF",
          sector: "Manufacturing",
          challenge: "Team training and social climate improvement",
          solution: "Continuous training program and HR tools implementation",
          results: [
            "50% reduction in turnover",
            "70% increase in employee satisfaction",
            "35% performance improvement"
          ],
          duration: "12 months",
          tags: ["Training", "HR", "Performance"]
        },
        {
          title: "Growth Strategy for a Distribution Chain",
          client: "Distribution GHI",
          sector: "Retail",
          challenge: "Geographic expansion and supply chain optimization",
          solution: "In-depth market study and 5-year strategic plan",
          results: [
            "Opening of 15 new retail outlets",
            "Logistics optimization with 25% savings",
            "120% revenue growth in 3 years"
          ],
          duration: "18 months",
          tags: ["Strategy", "Expansion", "Logistics"]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{t.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8">
          {t.caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl text-primary">{study.title}</CardTitle>
                <p className="text-muted-foreground">
                  <strong>{language === 'fr' ? 'Client:' : 'Client:'}</strong> {study.client} • 
                  <strong> {language === 'fr' ? 'Secteur:' : 'Sector:'}</strong> {study.sector} • 
                  <strong> {language === 'fr' ? 'Durée:' : 'Duration:'}</strong> {study.duration}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      {language === 'fr' ? 'Défi' : 'Challenge'}
                    </h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      {language === 'fr' ? 'Solution' : 'Solution'}
                    </h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      {language === 'fr' ? 'Résultats' : 'Results'}
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2">
                          <DollarSign className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;