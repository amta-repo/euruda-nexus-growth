interface ServicesProps {
  language: "fr" | "en";
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    fr: {
      title: "Nos Services",
      subtitle: "Des solutions sur-mesure pour transformer votre entreprise"
    },
    en: {
      title: "Our Services",
      subtitle: "Customized solutions to transform your business"
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

export default Services;