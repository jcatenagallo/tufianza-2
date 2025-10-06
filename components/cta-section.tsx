import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 p-12 text-center shadow-2xl md:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">¿Listo para tu Nuevo Hogar?</h2>
            <p className="text-pretty mx-auto max-w-2xl text-xl text-white/90">
              Empezá tu proceso hoy y mudáte en días, no en meses
            </p>
            <Button
              size="lg"
              className="h-14 gap-2 bg-white px-8 text-lg font-semibold text-blue-600 shadow-xl hover:bg-white/90"
            >
              Obtener Garantía Ahora
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
