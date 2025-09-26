import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

interface FAQProps {
  language: "fr" | "en";
}

const FAQ = ({ language }: FAQProps) => {
  const content = {
    fr: {
      title: "Questions Fréquentes",
      subtitle: "Trouvez les réponses à vos questions les plus courantes",
      categories: [
        {
          title: "Services et Prestations",
          faqs: [
            {
              question: "Quels types de services proposez-vous ?",
              answer: "Nous proposons une gamme complète de services de conseil en gestion d'entreprise : élaboration de business plans, conseil financier, développement des équipes, gestion de projets, transformation digitale, et stratégie d'entreprise."
            },
            {
              question: "Combien de temps dure généralement une mission ?",
              answer: "La durée varie selon la complexité du projet. Une mission peut aller de quelques semaines pour un audit ponctuel à plusieurs mois pour une transformation complète d'entreprise. Nous établissons toujours un calendrier précis dès le début."
            },
            {
              question: "Travaillez-vous avec toutes les tailles d'entreprises ?",
              answer: "Oui, nous accompagnons aussi bien les startups que les PME et les grandes entreprises. Nos approches sont adaptées à la taille et aux besoins spécifiques de chaque organisation."
            }
          ]
        },
        {
          title: "Processus et Méthodologie",
          faqs: [
            {
              question: "Comment se déroule votre processus de conseil ?",
              answer: "Notre processus comprend 4 étapes : 1) Diagnostic initial et analyse des besoins, 2) Élaboration d'une stratégie personnalisée, 3) Mise en œuvre avec accompagnement, 4) Suivi et évaluation des résultats."
            },
            {
              question: "Proposez-vous un suivi après la fin de la mission ?",
              answer: "Absolument. Nous offrons un suivi post-mission pour s'assurer de la bonne implémentation des recommandations et de l'atteinte des objectifs fixés. Ce suivi peut être personnalisé selon vos besoins."
            },
            {
              question: "Comment garantissez-vous la confidentialité ?",
              answer: "Nous signons systématiquement des accords de confidentialité (NDA) avec tous nos clients. Toutes les informations partagées sont strictement protégées et utilisées uniquement dans le cadre de la mission."
            }
          ]
        },
        {
          title: "Tarification et Modalités",
          faqs: [
            {
              question: "Comment sont calculés vos tarifs ?",
              answer: "Nos tarifs sont établis selon la complexité de la mission, sa durée, et les ressources mobilisées. Nous proposons des tarifs au forfait ou à la journée selon le type de prestation. Un devis détaillé est toujours fourni."
            },
            {
              question: "Proposez-vous des facilités de paiement ?",
              answer: "Oui, nous pouvons proposer des échéanciers de paiement adaptés à votre situation financière, notamment pour les missions de longue durée."
            },
            {
              question: "Y a-t-il des frais cachés ?",
              answer: "Non, tous nos tarifs sont transparents. Le devis inclut l'ensemble des prestations. Seuls les frais de déplacement exceptionnels peuvent être facturés en sus, après accord préalable."
            }
          ]
        },
        {
          title: "Secteurs et Expertise",
          faqs: [
            {
              question: "Dans quels secteurs avez-vous de l'expérience ?",
              answer: "Nous avons une expertise dans de nombreux secteurs : textile, agroalimentaire, services financiers, commerce, industrie manufacturière, technologies, et services. Notre approche transversale nous permet de nous adapter à tout secteur."
            },
            {
              question: "Avez-vous de l'expérience avec les entreprises africaines ?",
              answer: "Absolument. Basés au Bénin, nous comprenons parfaitement les spécificités du marché africain, les défis locaux, et les opportunités de croissance dans la région."
            },
            {
              question: "Pouvez-vous nous aider à nous développer à l'international ?",
              answer: "Oui, nous accompagnons les entreprises dans leur stratégie d'internationalisation, de l'étude de marché à la mise en place opérationnelle, en passant par l'adaptation culturelle et réglementaire."
            }
          ]
        }
      ],
      contactSection: {
        title: "Une question non résolue ?",
        subtitle: "Notre équipe est à votre disposition pour répondre à toutes vos questions",
        whatsappText: "Contactez-nous sur WhatsApp",
        callText: "Appelez-nous directement"
      }
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to your most common questions",
      categories: [
        {
          title: "Services and Offerings",
          faqs: [
            {
              question: "What types of services do you offer?",
              answer: "We offer a complete range of business management consulting services: business plan development, financial advisory, team development, project management, digital transformation, and business strategy."
            },
            {
              question: "How long does a typical mission last?",
              answer: "Duration varies according to project complexity. A mission can range from a few weeks for a specific audit to several months for complete business transformation. We always establish a precise timeline from the beginning."
            },
            {
              question: "Do you work with companies of all sizes?",
              answer: "Yes, we support startups, SMEs, and large corporations alike. Our approaches are adapted to the size and specific needs of each organization."
            }
          ]
        },
        {
          title: "Process and Methodology",
          faqs: [
            {
              question: "How does your consulting process work?",
              answer: "Our process includes 4 steps: 1) Initial diagnosis and needs analysis, 2) Development of a personalized strategy, 3) Implementation with support, 4) Follow-up and results evaluation."
            },
            {
              question: "Do you provide follow-up after the mission ends?",
              answer: "Absolutely. We offer post-mission follow-up to ensure proper implementation of recommendations and achievement of set objectives. This follow-up can be customized according to your needs."
            },
            {
              question: "How do you guarantee confidentiality?",
              answer: "We systematically sign confidentiality agreements (NDAs) with all our clients. All shared information is strictly protected and used only within the scope of the mission."
            }
          ]
        },
        {
          title: "Pricing and Terms",
          faqs: [
            {
              question: "How are your rates calculated?",
              answer: "Our rates are established according to mission complexity, duration, and resources mobilized. We offer fixed-price or daily rates depending on the type of service. A detailed quote is always provided."
            },
            {
              question: "Do you offer payment facilities?",
              answer: "Yes, we can propose payment schedules adapted to your financial situation, particularly for long-term missions."
            },
            {
              question: "Are there any hidden fees?",
              answer: "No, all our rates are transparent. The quote includes all services. Only exceptional travel expenses may be billed separately, after prior agreement."
            }
          ]
        },
        {
          title: "Sectors and Expertise",
          faqs: [
            {
              question: "In which sectors do you have experience?",
              answer: "We have expertise in many sectors: textile, agribusiness, financial services, commerce, manufacturing, technology, and services. Our cross-functional approach allows us to adapt to any sector."
            },
            {
              question: "Do you have experience with African companies?",
              answer: "Absolutely. Based in Benin, we perfectly understand the specificities of the African market, local challenges, and growth opportunities in the region."
            },
            {
              question: "Can you help us develop internationally?",
              answer: "Yes, we support companies in their internationalization strategy, from market research to operational implementation, including cultural and regulatory adaptation."
            }
          ]
        }
      ],
      contactSection: {
        title: "Have an unresolved question?",
        subtitle: "Our team is at your disposal to answer all your questions",
        whatsappText: "Contact us on WhatsApp",
        callText: "Call us directly"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {t.categories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-16 text-center">
          <CardHeader>
            <CardTitle className="text-3xl text-primary">{t.contactSection.title}</CardTitle>
            <p className="text-muted-foreground">{t.contactSection.subtitle}</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="gap-2">
                <a 
                  href="https://wa.me/22997123456?text=Bonjour,%20j'ai%20une%20question%20concernant%20vos%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.contactSection.whatsappText}
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="tel:+22997123456">
                  <Phone className="w-4 h-4" />
                  {t.contactSection.callText}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;