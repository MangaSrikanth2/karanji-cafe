"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

// Mock Data
const categories = ["All", "Espresso", "Pour Over", "Tea", "Pastries", "Brunch"];

const allMenuItems = [
  { id: 1, category: "Espresso", name: "Signature Espresso", desc: "House blend, dark chocolate notes.", price: "₹150", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80", dietary: [] },
  { id: 2, category: "Espresso", name: "Classic Cappuccino", desc: "Double shot, perfectly textured milk.", price: "₹220", dietary: ["Vegetarian"], img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80" },
  { id: 3, category: "Pour Over", name: "Ethiopia Yirgacheffe", desc: "Light roast, floral & citrus notes.", price: "₹280", dietary: ["Vegan"], img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80" },
  { id: 4, category: "Brunch", name: "Artisan Avocado Toast", desc: "Sourdough, cherry tomatoes, microgreens.", price: "₹350", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&q=80", dietary: ["Vegan"] },
  { id: 5, category: "Pastries", name: "Butter Croissant", desc: "Flaky, buttery, freshly baked daily.", price: "₹180", dietary: ["Vegetarian"], img: "https://images.unsplash.com/photo-1623334044303-241021148842?w=500&q=80" },
  { id: 6, category: "Tea", name: "Matcha Latte", desc: "Ceremonial grade matcha, steamed milk.", price: "₹240", dietary: ["Vegetarian"], img: "https://images.unsplash.com/photo-1536514072410-5019a3c69182?w=500&q=80" },
  { id: 7, category: "Tea", name: "Earl Grey Reserve", desc: "Classic black tea infused with bergamot.", price: "₹190", dietary: ["Vegan"], img: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?w=500&q=80" },
  { id: 8, category: "Pastries", name: "Almond Danese", desc: "Crispy pastry filled with rich almond frangipane.", price: "₹210", dietary: ["Vegetarian"], img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80" },
  { id: 9, category: "Brunch", name: "Truffle Mushroom Toast", desc: "Wild mushrooms, truffle oil, and ricotta on sourdough.", price: "₹380", dietary: ["Vegetarian"], img: "https://images.unsplash.com/photo-1628198751525-4c0429780517?w=500&q=80" },
  { id: 10, category: "Pour Over", name: "Colombia Supremo", desc: "Medium roast, caramel and nutty notes.", price: "₹270", dietary: ["Vegan"], img: "https://images.unsplash.com/photo-1505353592182-0af366b5c907?w=500&q=80" },
  { id: 11, category: "Espresso", name: "Caramel Macchiato", desc: "Vanilla, steamed milk, espresso, caramel drizzle.", price: "₹260", dietary: ["Vegetarian"], img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&q=80" },
  { id: 12, category: "Pastries", name: "Dark Chocolate Babka", desc: "Sweet braided bread layered with dark chocolate.", price: "₹250", dietary: ["Vegetarian"], img: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?w=500&q=80" }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? allMenuItems 
    : allMenuItems.filter(item => item.category === activeCategory);
  
  return (
    <div className="bg-cream min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-espresso mb-6">Our Menu</h1>
          <p className="text-espresso/70 text-lg">
            Carefully curated selections prepared with the finest ingredients and unmatched attention to detail.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                ? "bg-espresso text-cream" 
                : "bg-sand/30 text-espresso hover:bg-sand/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-sand/30 overflow-hidden group flex flex-col">
              {item.img && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="font-serif text-xl font-bold text-espresso">{item.name}</h3>
                  <span className="font-medium text-coffee-brown whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-espresso/70 text-sm mb-4 flex-1">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.dietary?.map(diet => (
                    <span key={diet} className="text-xs px-2 py-1 bg-sand/20 text-espresso rounded-md">
                      {diet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-espresso/60">No items found in this category.</p>
          </div>
        )}

        {/* Takeaway CTA */}
        <div className="mt-20 bg-sand/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-espresso mb-4">Want it to go?</h2>
          <p className="text-espresso/80 mb-8 max-w-xl mx-auto">
            Place an order for pickup by calling us or sending a message on WhatsApp. We'll have it ready for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Phone className="h-4 w-4" />
              Call to Order
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-espresso bg-white">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
