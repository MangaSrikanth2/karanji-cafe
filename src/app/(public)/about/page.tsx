import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="py-20 md:py-32 text-center container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl text-espresso mb-6">Our Story</h1>
        <p className="text-xl text-espresso/80 font-light leading-relaxed">
          More than just a café. We are a gathering place for the community, a haven for coffee purists, and a celebration of culinary craft.
        </p>
      </section>

      {/* Featured Image */}
      <div className="w-full h-[50vh] min-h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop"
          alt="Coffee roasting process"
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">The Philosophy</h2>
            <p className="text-espresso/80 text-lg leading-relaxed">
              At The Karanji Cafe, we believe that great coffee is an art form. It starts with the farmers who grow the beans, the roasters who unlock their potential, and finally, our baristas who craft your perfect cup.
            </p>
            <p className="text-espresso/80 text-lg leading-relaxed">
              We source our beans sustainably, ensuring fair compensation for farmers and the highest quality in your cup. Every ingredient in our kitchen is chosen with the same level of care and intention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1000&auto=format&fit=crop" 
                alt="Barista crafting coffee" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop" 
                alt="Cafe interior" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">The Space</h2>
            <p className="text-espresso/80 text-lg leading-relaxed">
              Designed with warmth and elegance in mind, our space is built for connection. Whether you're finding a quiet corner to read, meeting colleagues, or catching up with old friends, the atmosphere is calibrated to make you feel completely at ease.
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
