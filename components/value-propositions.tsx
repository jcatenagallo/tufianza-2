import { Card, CardContent } from "@/components/ui/card"
import { Globe, Clock, Home } from "lucide-react"

const values = [
  {
    icon: Globe,
    title: "Proceso 100% Online",
    description: "Todo digital, sin trámites presenciales ni papelerío complicado",
  },
  {
    icon: Clock,
    title: "Respuesta en Horas",
    description: "Proceso de aprobación rápido para que no pierdas tiempo",
  },
  {
    icon: Home,
    title: "Sin Garante Propietario",
    description: "No necesitás que un familiar tenga propiedad para respaldarte",
  },
]

export function ValuePropositions() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="group border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-pretty text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
