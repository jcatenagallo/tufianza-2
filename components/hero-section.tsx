import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-1/4 top-40 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Hero content */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Alquilá Hoy,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Sin Complicaciones
              </span>
            </h1>

            <p className="text-balance text-2xl font-semibold text-muted-foreground md:text-3xl">
              Somos tu garante - Solo necesitás comprobar tus ingresos
            </p>

            <p className="text-pretty mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Olvidate de buscar un familiar con propiedad. Con nosotros, podés acceder a tu alquiler de forma rápida y
              100% online. Tu independencia empieza hoy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/30">
                Comenzar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 gap-2 border-2 px-8 text-lg font-semibold bg-transparent"
              >
                <MessageCircle className="h-5 w-5" />
                Consultá por WhatsApp
              </Button>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="mt-16 w-full max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl">
              <img
                src="/modern-apartment-building-illustration-colorful.jpg"
                alt="Ilustración de alquiler moderno"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
