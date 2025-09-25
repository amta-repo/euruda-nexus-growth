import HeroSection from "@/components/Home/HeroSection";

interface IndexProps {
  language: "fr" | "en";
}

const Index = ({ language }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection language={language} />
      
      {/* Additional sections will be added here */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            {language === "fr" ? "Nos Services d'Excellence" : "Our Excellence Services"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "fr" 
              ? "Découvrez notre gamme complète de services de conseil pour transformer votre entreprise et atteindre vos objectifs stratégiques."
              : "Discover our complete range of consulting services to transform your business and achieve your strategic objectives."
            }
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
