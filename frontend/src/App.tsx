import { useState } from "react";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");
  const [reply, setReply] = useState("");

  async function ask() {
    const res = await axios.post("http://localhost:3001/ask", { query });
    setReply(res.data.answer);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">🌤 Weather Agent UI</h1>

      <div className="flex gap-3 w-full max-w-md">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask weather: e.g., weather in Mumbai"
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
        />

        <button
          onClick={ask}
          className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Ask
        </button>
      </div>

      <pre className="mt-6 p-4 bg-white/80 backdrop-blur shadow-lg rounded-lg w-full max-w-md whitespace-pre-wrap text-gray-800">
        {reply || "Response will appear here..."}
      </pre>
    </div>
  );
}
