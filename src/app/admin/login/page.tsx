import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminLoginPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center gap-2 mb-8 group relative h-24 w-72">
        <Image src="/KARANJI_LOGO.png" alt="Karanji Cafe" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain" />
      </Link>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-sand/30 w-full max-w-md">
        <h1 className="text-2xl font-bold text-espresso mb-2 text-center">Admin Login</h1>
        <p className="text-espresso/70 text-sm text-center mb-8">Sign in to manage your cafe's website content.</p>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-espresso">Email address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent bg-cream/50"
              placeholder="admin@karanjicafe.com"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm font-medium text-espresso">Password</label>
            </div>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-3 rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent bg-cream/50"
              placeholder="••••••••"
            />
          </div>

          <Button type="button" className="w-full" asChild>
            <Link href="/admin">Sign In</Link>
          </Button>
        </form>
      </div>
    </div>
  );
}
