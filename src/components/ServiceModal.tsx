import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    description: string;
    detailedDescription: string;
    features: string[];
    benefits: string[];
    process: string[];
    deliverables: string[];
    duration: string;
    pricing: string;
  };
  language: "fr" | "en";
}

const ServiceModal = ({ isOpen, onClose, service, language }: ServiceModalProps) => {
  const labels = {
    fr: {
      features: "Caractéristiques",
      benefits: "Avantages",
      process: "Notre Processus",
      deliverables: "Livrables",
      duration: "Durée",
      pricing: "Tarification",
      contact: "Nous Contacter",
      whatsapp: "WhatsApp",
      call: "Appeler"
    },
    en: {
      features: "Features",
      benefits: "Benefits",
      process: "Our Process",
      deliverables: "Deliverables",
      duration: "Duration",
      pricing: "Pricing",
      contact: "Contact Us",
      whatsapp: "WhatsApp",
      call: "Call"
    }
  };

  const t = labels[language];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{service.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Detailed Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">{service.detailedDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">{t.features}</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">{t.benefits}</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">{t.process}</h3>
            <div className="space-y-2">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Badge variant="outline" className="min-w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">
                    {index + 1}
                  </Badge>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">{t.deliverables}</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration and Pricing */}
          <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
            <div>
              <h4 className="font-semibold text-primary mb-1">{t.duration}</h4>
              <p className="text-sm text-muted-foreground">{service.duration}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">{t.pricing}</h4>
              <p className="text-sm text-muted-foreground">{service.pricing}</p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button asChild className="flex-1 gap-2">
              <a 
                href={`https://wa.me/22997123456?text=${encodeURIComponent(`Bonjour, je suis intéressé par votre service: ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                {t.whatsapp}
              </a>
            </Button>
            <Button variant="outline" asChild className="flex-1 gap-2">
              <a href="tel:+22997123456">
                <Phone className="w-4 h-4" />
                {t.call}
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;