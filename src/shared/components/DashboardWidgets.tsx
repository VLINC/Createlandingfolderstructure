export default function DashboardWidgets() {
  const widgets = [
    {
      title: "Total Jobs",
      value: "12",
      color: "bg-red-50 border-red-200 text-red-700",
    },
    {
      title: "Upcoming Jobs",
      value: "3",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      title: "Earnings (This Month)",
      value: "$842",
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      title: "Account Status",
      value: "Verified",
      color: "bg-black border-black text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {widgets.map((w) => (
        <div
          key={w.title}
          className={`rounded-xl border p-6 shadow-sm ${w.color}`}
        >
          <p className="text-sm font-medium">{w.title}</p>
          <p className="text-3xl font-bold mt-2">{w.value}</p>
        </div>
      ))}
    </div>
  );
}











