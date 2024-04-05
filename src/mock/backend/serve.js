import express from "express";
import { readFileSync } from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Disable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// API endpoints
app.get("/showcase/get", async (_, res) => {
  const data = readFileSync("src/mock/data/showcase/get/success.json", "utf8");
  res.json(await JSON.parse(data));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
