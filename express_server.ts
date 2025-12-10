import express from "express";
import cors from "cors";
import { Agent, run, MCPServerStreamableHttp } from "@openai/agents";
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST", "GET"],
}));

app.post("/ask", async (req, res) => {
  const { query } = req.body;

  const mcp = new MCPServerStreamableHttp({
    url: "http://localhost:8000/mcp",
    name: "Weather Server",
  });

  const agent = new Agent({
    name: "Weather Assistant",
    instructions: "Use tools to get weather.",
    mcpServers: [mcp],
  });

  await mcp.connect();
  const result = await run(agent, query);
  await mcp.close();

  res.json({ answer: result.finalOutput });
});

app.listen(3001, () => console.log("Express API Running on http://localhost:3001"));
