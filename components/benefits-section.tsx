import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Check } from "lucide-react"

const comparison = {
  antes: ["Buscar familiar con propiedad", "Trámites largos y complicados", "Dependencia de terceros"],
  conNosotros: ["Solo tus ingresos", "Proceso rápido y simple", "Independencia total"],
}

export function BenefitsSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            La Diferencia es Clara
          </h2>
          <p className="text-pretty mx-auto max-w-2xl text-lg text-muted-foreground">
            Compará el proceso tradicional con nuestra solución moderna
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Antes */}
          <Card className="border-2 border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <X className="h-6 w-6 text-red-600" />
                Antes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comparison.antes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Con Nosotros */}
          <Card className="border-2 border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Check className="h-6 w-6 text-green-600" />
                Con Nosotros
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comparison.conNosotros.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <p className="font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
