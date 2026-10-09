export default function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-espresso tracking-tight">Dashboard Overview</h1>
          <p className="text-espresso/70 mt-1">Welcome back. Here's what's happening today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-sand/30 shadow-sm">
          <h3 className="text-sm font-medium text-espresso/70 mb-1">Total Menu Items</h3>
          <p className="text-3xl font-bold text-espresso">42</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-sand/30 shadow-sm">
          <h3 className="text-sm font-medium text-espresso/70 mb-1">New Enquiries</h3>
          <p className="text-3xl font-bold text-espresso">5</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-sand/30 shadow-sm">
          <h3 className="text-sm font-medium text-espresso/70 mb-1">Gallery Images</h3>
          <p className="text-3xl font-bold text-espresso">18</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-sand/30 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-sand/30">
          <h2 className="text-lg font-semibold text-espresso">Recent Enquiries</h2>
        </div>
        <div className="divide-y divide-sand/30">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 flex justify-between items-center hover:bg-sand/5 transition-colors">
              <div>
                <p className="font-medium text-espresso">Jane Doe (Event Booking)</p>
                <p className="text-sm text-espresso/70 mt-1">jane@example.com • 2 hours ago</p>
              </div>
              <button className="text-sm font-medium text-espresso bg-sand/30 px-3 py-1.5 rounded-md hover:bg-sand/50 transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
