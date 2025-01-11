export function Tabs() {
  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <div className="border-b overflow-x-auto">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-2 py-4 text-sm font-bold border-b-2 ${
              tab === "Overview"
                ? "text-blue-600 border-blue-600"
                : "text-gray-600 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
