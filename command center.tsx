export default function SuggestiveToolsPage() {
  const suggestions = [
    {
      tool: "HS Code Intelligence",
      category: "Customs AI",
      confidence: 94,
      reason:
        "Recommended because you frequently analyze product classifications.",
    },
    {
      tool: "Landed Cost Calculator",
      category: "Trade Finance",
      confidence: 88,
      reason:
        "Suggested based on import cost calculation activity.",
    },
    {
      tool: "AI Document Analyzer",
      category: "Document Intelligence",
      confidence: 91,
      reason:
        "Useful for invoice, BL, and customs document processing.",
    },
    {
      tool: "Infrastructure Monitor",
      category: "Technology Operations",
      confidence: 86,
      reason:
        "Recommended from server monitoring activities.",
    },
  ];

  return (
    <main className="p-8 space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Suggestive Tools Engine
        </h1>

        <p className="text-zinc-500 mt-2">
          AI-powered recommendations based on user behaviour
        </p>
      </div>


      <div className="grid gap-6 md:grid-cols-2">

        {suggestions.map((item) => (

          <div
            key={item.tool}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >

            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-lg font-semibold">
                  {item.tool}
                </h2>

                <p className="text-sm text-zinc-500">
                  {item.category}
                </p>
              </div>


              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                {item.confidence}%
              </span>

            </div>


            <p className="mt-4 text-zinc-600">
              {item.reason}
            </p>


            <button
              className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              Open Tool
            </button>


          </div>

        ))}

      </div>


      <div className="rounded-xl border p-6">

        <h2 className="font-bold text-xl">
          Recommendation Flow
        </h2>

        <p className="mt-3 text-zinc-600">
          User Activity → Behaviour Analysis → AI Recommendation → Personalized Workspace
        </p>

      </div>


    </main>
  );
}
