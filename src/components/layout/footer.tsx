import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream border-t border-coffee-brown/30 mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group relative h-16 w-56 mb-2">
              <Image 
                src="/KARANJI_LOGO.png" 
                alt="Karanji Cafe Logo" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Experience the finest artisan coffee and elegant dining in a warm, modern atmosphere. Your daily escape for perfect moments.
            </p>
            <div className="flex gap-4 pt-2 text-sm">
              <a href="#" className="text-sand hover:text-white transition-colors font-medium">
                Instagram
              </a>
              <span className="text-sand/50">•</span>
              <a href="#" className="text-sand hover:text-white transition-colors font-medium">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Our Menu", href: "/menu" },
                { name: "Our Story", href: "/about" },
                { name: "Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-sand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin className="h-5 w-5 text-sand shrink-0" />
                <span>
                  THE KARANJI CAFE<br />
                  Beeramguda, Telangana<br />
                  India 502032.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Phone className="h-5 w-5 text-sand shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-sand transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Mail className="h-5 w-5 text-sand shrink-0" />
                <a href="mailto:hello@karanjicafe.com" className="hover:text-sand transition-colors">
                  hello@karanjicafe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Hours</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>09:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-coffee-brown/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>&copy; 2024 The Karanji Cafe. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-sand transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sand transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-sand transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
