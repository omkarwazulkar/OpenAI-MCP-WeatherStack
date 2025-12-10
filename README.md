📌 WeatherFullStackMCP

A full-stack Weather Agent powered by MCP (Model Context Protocol) + Node Express + React Vite UI.
The pipeline interacts with a Python MCP server to fetch real-time weather using wttr.in API.

🚀 Tech Stack

Layer	                Tech
MCP Tools	    Python (FastMCP, Requests)
Backend Agent	Node + TypeScript + @openai/agents
Frontend	    React + Vite + Tailwind

Flow
React (5173)
  → Express API (3001)
      → Agent using @openai/agents
          → MCP Python Weather Server (8000)

📂 Project Structure

WeatherFullStackMCP/
├── mcp_server.py               # MCP Weather tool server (Python)
├── express_server.ts           # Express backend that calls agent + MCP tools
├── package.json
├── tsconfig.json
├── .env                        # OpenAI API key goes here
├── .venv/                      # Python virtual environment
└── frontend/                   # Vite + React + Tailwind UI

🔑 Requirements

Python 3.11+
Node 18+
npm latest
OpenAI API Key

🧪 Setup Instructions

1. Clone Project
git clone https://github.com/<your-user>/WeatherFullStackMCP.git
cd WeatherFullStackMCP

### Step 1: MCP Python Server

2. Setup Python MCP Server
python3 -m venv .venv
source .venv/bin/activate
pip install fastmcp requests

3. Run MCP Server
Run Command: python mcp_server.py
MCP Server Running : http://localhost:8000/mcp

### Step 2: Node Backend

4. Setup Node Backend
npm install
npm install dotenv

5. Create .env (Root)
OPENAI_API_KEY=your_openai_api_key_here

6. Run Express Server
Run Command: npx ts-node express_server.ts
Express Server Running : http://localhost:3001/ask

### Step 3: React Frontend

7. Setup Frontend UI
cd frontend
npm install

8. Run React
Run Command: npm run dev
Frontend Running : http://localhost:5173

💬 Usage

Open http://localhost:5173 in your browser.
Enter a message like: What is the weather in New York?
Response:
![alt text](image.png)
Response Path: React → Express → Agent → MCP → Weather API → UI

⭐ Features

Real Weather Retrieval via MCP
Clean Tailwind UI
.env Key With dotenv
Modular Component Structure

🤝 Contribute

Pull requests welcome.
If you like this project, ⭐ star the repo!








