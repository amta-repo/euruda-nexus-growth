interface CaseStudiesProps {
  language: "fr" | "en";
}

const CaseStudies = ({ language }: CaseStudiesProps) => {
  const content = {
    fr: {
      title: "Études de Cas",
      subtitle: "Découvrez nos succès et les résultats obtenus"
    },
    en: {
      title: "Case Studies",
      subtitle: "Discover our successes and achieved results"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">{t.title}</h1>
        <p className="text-xl text-muted-foreground">{t.subtitle}</p>
      </div>
    </div>
  );
};

export default CaseStudies;