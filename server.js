import express from "express";
import path from "path";

const app = express();

const PORT = 3000;
const BUILD_FOLDER = "build";

console.log(`Starting webserver on .... localhost:${PORT}`)

app.use(express.static(path.join(process.cwd(), BUILD_FOLDER)));

app.get('/*', (req, res) => {
  console.log("Request received .........", req.headers.host, req.url);
  res.sendFile(path.join(process.cwd(), BUILD_FOLDER, "index.html"));
});

app.listen(PORT);