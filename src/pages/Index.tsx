import HeroSection from "@/components/Home/HeroSection";

interface IndexProps {
  language: "fr" | "en";
}

const Index = ({ language }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection language={language} />
      
      {/* Services Preview Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {language === "fr" ? "Nos Services d'Excellence" : "Our Excellence Services"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "fr" 
                ? "Découvrez notre gamme complète de services de conseil pour transformer votre entreprise et atteindre vos objectifs stratégiques."
                : "Discover our complete range of consulting services to transform your business and achieve your strategic objectives."
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-background rounded-lg p-6 shadow-sm hover:shadow-elegant transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {language === "fr" ? "Plans d'Affaires" : "Business Plans"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "fr" 
                  ? "Obtenez un financement avec nos plans d'affaires professionnels"
                  : "Get financing with our professional business plans"
                }
              </p>
            </div>

            <div className="group bg-background rounded-lg p-6 shadow-sm hover:shadow-elegant transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-accent">
                {language === "fr" ? "Développement d'Équipe" : "Team Development"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "fr" 
                  ? "Soyez maxi dynamique avec nos formations"
                  : "Be maximally dynamic with our training"
                }
              </p>
            </div>

            <div className="group bg-background rounded-lg p-6 shadow-sm hover:shadow-elegant transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-secondary">
                {language === "fr" ? "Conseil Financier" : "Financial Advisory"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "fr" 
                  ? "Plans de financement et remboursement sur mesure"
                  : "Custom financing and repayment plans"
                }
              </p>
            </div>

            <div className="group bg-background rounded-lg p-6 shadow-sm hover:shadow-elegant transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6m-8 0H8m8 0h2m-8 4h.01M12 14h.01M16 14h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {language === "fr" ? "Maîtrise d'Ouvrage" : "Project Management"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "fr" 
                  ? "Rapprochez-vous de nos experts projet"
                  : "Connect with our project experts"
                }
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              {language === "fr" ? "Voir tous nos services" : "View all services"}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
