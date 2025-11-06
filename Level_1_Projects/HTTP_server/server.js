// server.js
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const PORT = 3000;
const logFile = path.join(__dirname, "error.log");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Helper: Serve HTML or CSS file
  const serveFile = (filename, contentType, fallbackMessage) => {
    const filePath = path.join(__dirname, filename);

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        const errorMsg = `[${new Date().toISOString()}] Error reading ${filename}: ${err.message}\n`;
        fs.appendFile(logFile, errorMsg, (logErr) => {
          if (logErr) console.error("Failed to write to log file:", logErr);
        });

        // Send fallback for HTML only
        if (contentType === "text/html") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(`<h1>${fallbackMessage}</h1>`);
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("File not found");
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  };

  // Routing logic
  if (pathname === "/") {
    serveFile("index.html", "text/html", "Welcome to the Home Page!");
  } else if (pathname === "/about") {
    serveFile("about.html", "text/html", "About Us Page");
  } else if (pathname === "/style.css") {
    serveFile("style.css", "text/css");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
