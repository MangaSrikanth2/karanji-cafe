import { Button } from "@/components/ui/button";
import { Plus, Search, MoreVertical, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

// Mock Data
const menuItems = [
  { id: 1, category: "Espresso", name: "Signature Espresso", price: "₹150", status: "Active" },
  { id: 2, category: "Espresso", name: "Classic Cappuccino", price: "₹220", status: "Active" },
  { id: 3, category: "Pour Over", name: "Ethiopia Yirgacheffe", price: "₹280", status: "Active" },
  { id: 4, category: "Brunch", name: "Artisan Avocado Toast", price: "₹350", status: "Out of Stock" },
];

export default function AdminMenuPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-espresso tracking-tight">Menu Items</h1>
          <p className="text-espresso/70 mt-1">Manage your cafe's menu offerings.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Item
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-sand/30 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-espresso/50" />
          <input 
            type="text"
            placeholder="Search items..."
            className="w-full pl-9 pr-4 py-2 text-sm rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
          />
        </div>
        <select className="px-4 py-2 text-sm rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent bg-white">
          <option>All Categories</option>
          <option>Espresso</option>
          <option>Pour Over</option>
          <option>Brunch</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-sand/30 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-sand/10 border-b border-sand/30 text-espresso/70 font-medium">
              <tr>
                <th className="px-6 py-4">Item Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/30">
              {menuItems.map((item) => (
                <tr key={item.id} className="hover:bg-sand/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-espresso">{item.name}</td>
                  <td className="px-6 py-4 text-espresso/80">{item.category}</td>
                  <td className="px-6 py-4 text-espresso/80">{item.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-espresso/60 hover:text-espresso hover:bg-sand/30 rounded-md transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-red-500/80 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
