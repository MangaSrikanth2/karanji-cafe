import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472200-410fb71c4c96?q=80&w=800&auto=format&fit=crop",
];

export default function GalleryPage() {
  return (
    <div className="bg-cream min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-espresso mb-6">Gallery</h1>
          <p className="text-espresso/70 text-lg">
            A glimpse into the atmosphere, craft, and creations at The Karanji Cafe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, i) => (
            <div 
              key={i} 
              className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer bg-sand/20"
            >
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
