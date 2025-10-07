import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Completá el Formulario",
    description: "Ingresá tu información básica y detalles de tus ingresos",
  },
  {
    number: "2",
    title: "Validamos tu Información",
    description: "Revisamos tu solicitud en 24-48 horas",
  },
  {
    number: "3",
    title: "¡Listo para Alquilar!",
    description: "Recibís tu garantía y podés firmar el contrato",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-gradient-to-br from-blue-50 to-orange-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            3 Pasos para Tu Garantía
          </h2>
          <p className="text-pretty mx-auto max-w-2xl text-lg text-muted-foreground">
            Un proceso simple y transparente para que puedas mudarte lo antes posible
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-12 hidden h-1 w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-blue-300 via-blue-400 to-orange-400 md:block" />

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl">
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-pretty text-muted-foreground">{step.description}</p>
                </div>

                {/* Check icon */}
                <CheckCircle2 className="mt-4 h-6 w-6 text-green-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
