interface FAQProps {
  language: "fr" | "en";
}

const FAQ = ({ language }: FAQProps) => {
  const content = {
    fr: {
      title: "Questions Fréquentes",
      subtitle: "Trouvez les réponses à vos questions les plus courantes"
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to your most common questions"
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

export default FAQ;