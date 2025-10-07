"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-60 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
          >
            Garantía de Alquiler
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Beneficios
          </button>
          <button
            onClick={() => scrollToSection("proceso")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Cómo Funciona
          </button>
          <button
            onClick={() => scrollToSection("testimonios")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonios
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" className="gap-2 border-border">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          <Button size="sm" className="shadow-md shadow-primary/20">
            Comenzar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="space-y-1 px-6 py-4">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Testimonios
            </button>
            <div className="space-y-2 pt-4">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button size="sm" className="w-full shadow-md shadow-primary/20">
                Comenzar
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
