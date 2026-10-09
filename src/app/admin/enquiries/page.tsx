import { Button } from "@/components/ui/button";
import { Search, Mail, Filter, Reply, CheckCircle2, MoreVertical } from "lucide-react";

// Mock Data
const enquiries = [
  { id: 1, name: "Jane Doe", contact: "jane@example.com", subject: "Event Booking", status: "New", date: "2 hours ago", preview: "Hi, I would like to know if we can book the entire cafe for a private event on..." },
  { id: 2, name: "Michael Smith", contact: "+91 9876543210", subject: "Catering Menu", status: "Replied", date: "Yesterday", preview: "Do you offer catering for corporate events of around 50 people? We need..." },
  { id: 3, name: "Sarah Johnson", contact: "sarah.j@email.com", subject: "Feedback", status: "Resolved", date: "3 days ago", preview: "Just wanted to say the new Ethiopia Yirgacheffe pour over is amazing!" },
  { id: 4, name: "David Chen", contact: "david@example.com", subject: "Opening Hours", status: "New", date: "4 days ago", preview: "Are you guys open on public holidays this upcoming weekend?" },
];

export default function AdminEnquiriesPage() {
  return (
    <div className="space-y-6 flex flex-col h-full min-h-[80vh]">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-espresso tracking-tight">Enquiries</h1>
          <p className="text-espresso/70 mt-1">Manage contact form submissions and messages.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
        
        {/* Inbox List */}
        <div className="w-full lg:w-1/3 bg-white rounded-xl border border-sand/30 shadow-sm flex flex-col h-[700px]">
          <div className="p-4 border-b border-sand/30 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-espresso/50" />
              <input 
                type="text"
                placeholder="Search messages..."
                className="w-full pl-9 pr-4 py-2 text-sm rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 gap-2 text-xs">
                <Filter className="h-3 w-3" /> Filter
              </Button>
              <select className="flex-1 px-2 py-1.5 text-xs rounded-md border border-sand/50 focus:outline-none focus:ring-2 focus:ring-espresso bg-white">
                <option>All Status</option>
                <option>New</option>
                <option>Replied</option>
              </select>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto divide-y divide-sand/30">
            {enquiries.map((enquiry) => (
              <button 
                key={enquiry.id} 
                className={`w-full text-left p-4 hover:bg-sand/10 transition-colors ${enquiry.id === 1 ? 'bg-sand/20 border-l-4 border-espresso' : 'border-l-4 border-transparent'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={`font-semibold text-sm ${enquiry.status === 'New' ? 'text-espresso' : 'text-espresso/70'}`}>
                    {enquiry.name}
                  </span>
                  <span className="text-xs text-espresso/50 whitespace-nowrap ml-2">{enquiry.date}</span>
                </div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium text-coffee-brown truncate">{enquiry.subject}</span>
                  {enquiry.status === 'New' && (
                    <span className="w-2 h-2 bg-espresso rounded-full shrink-0"></span>
                  )}
                </div>
                <p className="text-xs text-espresso/60 line-clamp-2 leading-relaxed">
                  {enquiry.preview}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Message View */}
        <div className="w-full lg:w-2/3 bg-white rounded-xl border border-sand/30 shadow-sm flex flex-col h-[700px]">
          {/* Header */}
          <div className="p-6 border-b border-sand/30 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-serif font-bold text-espresso mb-1">Event Booking</h2>
              <div className="flex items-center gap-2 text-sm text-espresso/70">
                <span className="font-medium text-espresso">Jane Doe</span>
                <span>&lt;jane@example.com&gt;</span>
              </div>
              <p className="text-xs text-espresso/50 mt-1">Received: Today at 2:30 PM</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Mark Resolved
              </Button>
              <Button variant="ghost" size="sm" className="px-2">
                <MoreVertical className="h-4 w-4 text-espresso/60" />
              </Button>
            </div>
          </div>
          
          {/* Body */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="prose prose-sm max-w-none text-espresso/80">
              <p>Hi,</p>
              <p>I would like to know if we can book the entire cafe for a private event on the evening of November 15th. It would be a birthday gathering for roughly 35 people.</p>
              <p>Could you let me know if this date is available, and if so, what your minimum spend or rental fees are? We would also be interested in a curated food and drink menu.</p>
              <p>Looking forward to hearing from you.</p>
              <p>Best,<br/>Jane</p>
            </div>
          </div>
          
          {/* Reply Action */}
          <div className="p-4 border-t border-sand/30 bg-cream/30">
            <Button className="gap-2 w-full justify-center">
              <Reply className="h-4 w-4" />
              Reply via Email
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
