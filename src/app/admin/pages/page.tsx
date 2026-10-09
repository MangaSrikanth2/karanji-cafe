import { Button } from "@/components/ui/button";
import { Edit3, Check, Globe } from "lucide-react";

const pages = [
  { id: "home", name: "Homepage", path: "/", lastEdited: "2 days ago", status: "Published" },
  { id: "about", name: "Our Story", path: "/about", lastEdited: "1 week ago", status: "Published" },
  { id: "contact", name: "Contact & Location", path: "/contact", lastEdited: "1 month ago", status: "Published" },
  { id: "privacy", name: "Privacy Policy", path: "/privacy", lastEdited: "2 months ago", status: "Draft" },
];

export default function AdminPagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-espresso tracking-tight">Pages Content</h1>
          <p className="text-espresso/70 mt-1">Edit the text and content of your static pages.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Pages List */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-sand/30 shadow-sm overflow-hidden flex flex-col h-[600px]">
          <div className="p-4 border-b border-sand/30 bg-cream/30">
            <h2 className="font-semibold text-espresso">Select a page to edit</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {pages.map((page) => (
              <button 
                key={page.id} 
                className={`w-full text-left p-3 rounded-lg flex flex-col gap-1 transition-colors ${
                  page.id === 'about' ? 'bg-sand/30 border border-sand/50' : 'hover:bg-sand/10 border border-transparent'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-espresso">{page.name}</span>
                  {page.status === 'Published' && <Check className="h-4 w-4 text-green-600" />}
                </div>
                <div className="flex justify-between items-center text-xs text-espresso/60">
                  <span className="truncate">{page.path}</span>
                  <span>{page.lastEdited}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Editor Preview (Mock) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-sand/30 shadow-sm overflow-hidden flex flex-col h-[600px]">
          <div className="p-4 border-b border-sand/30 flex justify-between items-center bg-cream/30">
            <div className="flex items-center gap-2">
              <Edit3 className="h-5 w-5 text-espresso/60" />
              <h2 className="font-semibold text-espresso">Editing: Our Story</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                Preview
              </Button>
              <Button size="sm">Save Changes</Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Page Headline</label>
              <input 
                type="text" 
                defaultValue="Our Story"
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent font-serif text-lg"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Sub-headline</label>
              <textarea 
                rows={2}
                defaultValue="More than just a café. We are a gathering place for the community, a haven for coffee purists, and a celebration of culinary craft."
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">The Philosophy (Paragraph 1)</label>
              <textarea 
                rows={4}
                defaultValue="At The Karanji Cafe, we believe that great coffee is an art form. It starts with the farmers who grow the beans, the roasters who unlock their potential, and finally, our baristas who craft your perfect cup."
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">The Philosophy (Paragraph 2)</label>
              <textarea 
                rows={4}
                defaultValue="We source our beans sustainably, ensuring fair compensation for farmers and the highest quality in your cup. Every ingredient in our kitchen is chosen with the same level of care and intention."
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
