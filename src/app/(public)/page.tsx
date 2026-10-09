import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            alt="Interior of Karanji Cafe"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            priority
          />
          {/* Elegant dark overlay for text readability */}
          <div className="absolute inset-0 bg-espresso/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <span className="text-sand font-medium tracking-[0.2em] uppercase text-sm mb-6 fade-in">
            Welcome to
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 max-w-4xl leading-tight">
            The Karanji <br className="hidden md:block" /> Cafe
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mb-10 font-light">
            Where artisanal coffee meets elegant dining. Experience crafted perfection in every cup and plate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-sand text-espresso hover:bg-white" asChild>
              <Link href="/menu">Explore Menu</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/contact">Find Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-espresso mb-4">House Favorites</h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Discover our most loved creations, crafted with passion and the finest ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Signature Espresso",
                desc: "Our house blend with notes of dark chocolate and caramel.",
                price: "₹150",
                img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Artisan Avocado Toast",
                desc: "Sourdough, smashed avocado, cherry tomatoes, and microgreens.",
                price: "₹350",
                img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Classic Cappuccino",
                desc: "Perfectly textured milk poured over a double shot of espresso.",
                price: "₹220",
                img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-espresso">{item.name}</h3>
                  <span className="font-medium text-coffee-brown">{item.price}</span>
                </div>
                <p className="text-espresso/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-sand/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
                alt="Coffee preparation"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-espresso leading-tight">
                A dedication to the craft of coffee and community.
              </h2>
              <p className="text-espresso/80 text-lg leading-relaxed">
                Founded with a simple mission: to provide our neighborhood with exceptional coffee in an environment that feels like a second home. Every bean is ethically sourced and meticulously roasted.
              </p>
              <p className="text-espresso/80 text-lg leading-relaxed mb-8">
                Whether you're stopping by for your morning commute or settling in for an afternoon of work, we're here to make your day just a little bit better.
              </p>
              <Button size="lg" asChild>
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-espresso text-cream text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-sand text-sand" />)}
          </div>
          <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed mb-8">
            "An absolute gem. The ambiance is beautifully serene, the coffee is genuinely world-class, and the staff make you feel like family. My new favorite spot in the city."
          </blockquote>
          <cite className="not-italic block font-medium text-sand tracking-wide uppercase text-sm">
            — Sarah J., Local Resident
          </cite>
        </div>
      </section>
    </>
  );
}
