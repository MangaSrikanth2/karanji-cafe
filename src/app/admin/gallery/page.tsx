import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Mock Data
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", status: "Published", order: 1 },
  { id: 2, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", status: "Published", order: 2 },
  { id: 3, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop", status: "Draft", order: 3 },
  { id: 4, src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop", status: "Published", order: 4 },
];

export default function AdminGalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-espresso tracking-tight">Gallery Management</h1>
          <p className="text-espresso/70 mt-1">Upload and arrange photos for the public gallery.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Upload Image
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-sand/30 shadow-sm p-6">
        <p className="text-sm text-espresso/70 mb-6">Drag and drop images to reorder them on the public gallery page.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative bg-cream rounded-lg overflow-hidden border border-sand/50">
              {/* Drag Handle & Actions */}
              <div className="absolute top-2 left-2 right-2 flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 bg-white/90 backdrop-blur-sm rounded-md shadow-sm text-espresso/60 hover:text-espresso cursor-grab">
                  <GripVertical className="h-4 w-4" />
                </button>
                <button className="p-1.5 bg-white/90 backdrop-blur-sm rounded-md shadow-sm text-red-500 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-2 left-2 z-10">
                <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-sm ${
                  image.status === 'Published' 
                    ? 'bg-green-100/90 text-green-700' 
                    : 'bg-yellow-100/90 text-yellow-700'
                }`}>
                  {image.status === 'Published' && <CheckCircle2 className="h-3 w-3" />}
                  {image.status}
                </span>
              </div>

              <div className="relative aspect-square w-full">
                <Image 
                  src={image.src} 
                  alt="Gallery thumbnail" 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover"
                />
              </div>
            </div>
          ))}
          
          {/* Upload Placeholder */}
          <button className="relative aspect-square w-full rounded-lg border-2 border-dashed border-sand/50 bg-sand/10 hover:bg-sand/20 transition-colors flex flex-col items-center justify-center gap-2 text-espresso/60 hover:text-espresso">
            <Plus className="h-8 w-8" />
            <span className="font-medium text-sm">Add New Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}
