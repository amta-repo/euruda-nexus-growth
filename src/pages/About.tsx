interface AboutProps {
  language: "fr" | "en";
}

const About = ({ language }: AboutProps) => {
  const content = {
    fr: {
      title: "À Propos de Nous",
      subtitle: "Votre partenaire de confiance depuis plus de 15 ans"
    },
    en: {
      title: "About Us",
      subtitle: "Your trusted partner for over 15 years"
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

export default About;