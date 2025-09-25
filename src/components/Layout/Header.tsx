import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  language: "fr" | "en";
  onLanguageChange: (lang: "fr" | "en") => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = {
    fr: [
      { name: "Accueil", href: "/" },
      { name: "Services", href: "/services" },
      { name: "À Propos", href: "/about" },
      { name: "Études de Cas", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    en: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="gradient-hero rounded-lg p-2">
              <div className="h-6 w-6 bg-gold rounded-sm"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">EURUDA</span>
              <span className="text-lg text-gold ml-1">CONSEIL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation[language].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href)
                    ? "text-primary border-b-2 border-gold pb-1"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "fr" ? "en" : "fr")}
              className="hidden sm:flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold">{language.toUpperCase()}</span>
            </Button>

            {/* Phone Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2"
              asChild
            >
              <a href="tel:+22997123456" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-xs">+229 97 12 34 56</span>
              </a>
            </Button>

            {/* CTA Button */}
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex gradient-hero hover:shadow-glow transition-all"
              asChild
            >
              <Link to="/contact">
                {language === "fr" ? "Consultation Gratuite" : "Free Consultation"}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation[language].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                    isActive(item.href)
                      ? "text-primary bg-secondary rounded"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-2 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onLanguageChange(language === "fr" ? "en" : "fr")}
                  className="flex items-center space-x-2"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">{language.toUpperCase()}</span>
                </Button>

                <Button
                  variant="default"
                  size="sm"
                  className="gradient-hero"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contact">
                    {language === "fr" ? "Contact" : "Contact"}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;