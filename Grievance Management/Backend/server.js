import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let grievances = []; // In-memory storage

app.post("/grievances", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  const grievance = { id: grievances.length + 1, name, email, message, date: new Date() };
  grievances.push(grievance);
  res.json({ success: true, grievance });
});

app.get("/grievances", (req, res) => {
  res.json(grievances);
});

app.listen(3000, () => console.log("✅ Server running at http://localhost:3000"));
