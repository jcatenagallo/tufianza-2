import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Tu Fianza</h3>
            <p className="text-pretty text-muted-foreground">
              Tu solución para alquilar sin garante propietario. Rápido, simple
              y 100% online.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <Button variant="outline" className="w-full gap-2 bg-transparent">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground">
              Respondemos en minutos
            </p>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Seguinos</h4>
            <div className="flex gap-3">
              <Button size="icon" variant="outline">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Tu Fianza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
