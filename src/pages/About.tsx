import { Users, Target, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AboutProps {
  language: "fr" | "en";
}

const About = ({ language }: AboutProps) => {
  const content = {
    fr: {
      title: "À Propos de Nous",
      subtitle: "Votre partenaire de confiance depuis plus de 15 ans",
      intro: "EURUDA CONSEIL est un cabinet de conseil en gestion d'entreprise basé à Cotonou, au cœur de la République du Bénin. Depuis notre création, nous accompagnons les entrepreneurs, PME et grandes entreprises dans leur développement et leur transformation.",
      mission: {
        title: "Notre Mission",
        description: "Nous accompagnons les entreprises dans leur croissance en proposant des solutions personnalisées et innovantes. Notre expertise couvre tous les aspects de la gestion d'entreprise, de la stratégie à l'opérationnel."
      },
      vision: {
        title: "Notre Vision",
        description: "Devenir le cabinet de référence en Afrique de l'Ouest pour l'accompagnement des entreprises dans leur transformation digitale et leur développement durable."
      },
      values: {
        title: "Nos Valeurs",
        items: [
          {
            icon: Users,
            title: "Excellence",
            description: "Nous visons l'excellence dans chaque mission en mobilisant notre expertise et notre expérience."
          },
          {
            icon: Target,
            title: "Innovation",
            description: "Nous proposons des solutions innovantes adaptées aux défis contemporains des entreprises."
          },
          {
            icon: Award,
            title: "Intégrité",
            description: "Nous agissons avec transparence et éthique dans toutes nos relations professionnelles."
          },
          {
            icon: Globe,
            title: "Impact",
            description: "Nous créons un impact positif durable pour nos clients et leur écosystème."
          }
        ]
      },
      team: {
        title: "Notre Équipe",
        description: "Notre équipe multidisciplinaire réunit des experts en gestion, finance, ressources humaines et transformation digitale, tous unis par la passion d'accompagner les entreprises vers le succès."
      },
      stats: {
        title: "Nos Réalisations",
        items: [
          { number: "15+", label: "Années d'expérience" },
          { number: "200+", label: "Entreprises accompagnées" },
          { number: "50+", label: "Projets réalisés" },
          { number: "95%", label: "Taux de satisfaction" }
        ]
      }
    },
    en: {
      title: "About Us",
      subtitle: "Your trusted partner for over 15 years",
      intro: "EURUDA CONSEIL is a business management consulting firm based in Cotonou, at the heart of the Republic of Benin. Since our inception, we have been supporting entrepreneurs, SMEs and large companies in their development and transformation.",
      mission: {
        title: "Our Mission",
        description: "We support companies in their growth by offering personalized and innovative solutions. Our expertise covers all aspects of business management, from strategy to operations."
      },
      vision: {
        title: "Our Vision",
        description: "To become the reference consulting firm in West Africa for supporting companies in their digital transformation and sustainable development."
      },
      values: {
        title: "Our Values",
        items: [
          {
            icon: Users,
            title: "Excellence",
            description: "We strive for excellence in every mission by mobilizing our expertise and experience."
          },
          {
            icon: Target,
            title: "Innovation",
            description: "We offer innovative solutions adapted to the contemporary challenges of businesses."
          },
          {
            icon: Award,
            title: "Integrity",
            description: "We act with transparency and ethics in all our professional relationships."
          },
          {
            icon: Globe,
            title: "Impact",
            description: "We create lasting positive impact for our clients and their ecosystem."
          }
        ]
      },
      team: {
        title: "Our Team",
        description: "Our multidisciplinary team brings together experts in management, finance, human resources and digital transformation, all united by the passion to support companies towards success."
      },
      stats: {
        title: "Our Achievements",
        items: [
          { number: "15+", label: "Years of experience" },
          { number: "200+", label: "Companies supported" },
          { number: "50+", label: "Projects completed" },
          { number: "95%", label: "Satisfaction rate" }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{t.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t.subtitle}</p>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">{t.intro}</p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{t.mission.description}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{t.vision.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t.values.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t.stats.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-center text-primary">{t.team.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              {t.team.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;