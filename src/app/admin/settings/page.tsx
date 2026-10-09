import { Button } from "@/components/ui/button";
import { Save, Store, MapPin, Share2 } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-espresso tracking-tight">Business Settings</h1>
          <p className="text-espresso/70 mt-1">Manage your cafe's core identity and contact details.</p>
        </div>
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-sand/30 shadow-sm overflow-hidden divide-y divide-sand/30">
        
        {/* General Info */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Store className="h-5 w-5 text-coffee-brown" />
            <h2 className="text-lg font-semibold text-espresso">General Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Cafe Name</label>
              <input 
                type="text" 
                defaultValue="The Karanji Cafe"
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Tagline</label>
              <input 
                type="text" 
                defaultValue="Premium Dine-in & Takeaway"
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-espresso">Short Description (Footer/SEO)</label>
              <textarea 
                rows={2}
                defaultValue="Experience the finest artisan coffee and elegant dining in a warm, modern atmosphere. Your daily escape for perfect moments."
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contact & Location */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-coffee-brown" />
            <h2 className="text-lg font-semibold text-espresso">Contact & Location</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Phone Number</label>
              <input 
                type="text" 
                defaultValue="+91 XXXXX XXXXX"
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Business Email</label>
              <input 
                type="email" 
                defaultValue="hello@karanjicafe.com"
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-espresso">Full Address</label>
              <textarea 
                rows={3}
                defaultValue="THE KARANJI CAFE, Beeramguda, Telangana, India 502032."
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="h-5 w-5 text-coffee-brown" />
            <h2 className="text-lg font-semibold text-espresso">Social Links</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Instagram URL</label>
              <input 
                type="url" 
                placeholder="https://instagram.com/..."
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-espresso">Facebook URL</label>
              <input 
                type="url" 
                placeholder="https://facebook.com/..."
                className="w-full px-4 py-2 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
