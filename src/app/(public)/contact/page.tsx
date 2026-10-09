import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-espresso mb-6">Contact & Location</h1>
          <p className="text-espresso/70 text-lg">
            We'd love to hear from you. Stop by for a coffee or drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 max-w-3xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl text-espresso mb-8">Get in Touch</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-sand/30 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-coffee-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso mb-1">Address</h3>
                    <p className="text-espresso/70 text-sm leading-relaxed">
                      THE KARANJI CAFE<br />
                      Beeramguda, Telangana<br />
                      India 502032.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-sand/30 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-coffee-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso mb-1">Phone / WhatsApp</h3>
                    <p className="text-espresso/70 text-sm">
                      <a href="tel:+91XXXXXXXXXX" className="hover:text-espresso transition-colors block">+91 XXXXX XXXXX</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-sand/30 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-coffee-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso mb-1">Email</h3>
                    <p className="text-espresso/70 text-sm">
                      <a href="mailto:hello@karanjicafe.com" className="hover:text-espresso transition-colors">hello@karanjicafe.com</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-sand/30 p-3 rounded-full shrink-0">
                    <Clock className="h-6 w-6 text-coffee-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso mb-1">Hours</h3>
                    <div className="text-espresso/70 text-sm space-y-1">
                      <p className="flex justify-between w-48"><span>Mon - Fri</span> <span>10:00 AM - 10:00 PM</span></p>
                      <p className="flex justify-between w-48"><span>Sat - Sun</span> <span>09:00 AM - 11:00 PM</span></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="w-full h-80 rounded-xl overflow-hidden border border-sand/50 shadow-sm bg-sand/30">
              <iframe 
                src="https://maps.google.com/maps?q=Beeramguda,+Ramachandrapuram,+Hyderabad,+Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Karanji Cafe Location"
              ></iframe>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
