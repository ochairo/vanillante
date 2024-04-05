import express from "express";
import path from "path";

const app = express();

// Serve static files from the 'public' directory
const publicPath = path.join(process.cwd(), "dist");
app.use(express.static(publicPath));

// Handle all other routes by serving the SPA's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
