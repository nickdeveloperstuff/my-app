import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    quote: "This product has completely transformed how we handle our workflow. The efficiency gains are remarkable.",
    name: "Sarah Johnson",
    title: "Product Manager at TechCorp",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The best investment we've made in our business this year. The ROI has been incredible.",
    name: "Michael Chen",
    title: "CEO at InnovateLabs",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Outstanding support team and feature-rich platform. Exactly what we were looking for.",
    name: "Emily Rodriguez",
    title: "CTO at StartupX",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

interface TestimonialSectionProps {
  className?: string;
}

export function TestimonialSection({ className }: TestimonialSectionProps) {
  return (
    <section className={cn("py-24 bg-background", className)}>
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <blockquote className="text-foreground">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 