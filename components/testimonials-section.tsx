import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "No tenía ningún familiar con propiedad en Buenos Aires. Gracias a ellos pude mudarme solo",
    author: "Tomás",
    age: 29,
  },
  {
    quote: "El proceso fue rapidísimo, en dos días tenía mi garantía aprobada",
    author: "Carolina",
    age: 26,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-gradient-to-br from-orange-50 to-blue-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6 text-lg text-foreground">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-bold text-white">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.age} años</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
