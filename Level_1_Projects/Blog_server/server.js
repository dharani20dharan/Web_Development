// server.js
const http = require("http");
const PORT = 3000;

// Hardcoded blog posts
const posts = [
  { title: "Exploring Node.js Basics", description: "Learn how Node.js powers backend applications with its event-driven architecture." },
  { title: "Understanding Asynchronous JavaScript", description: "Callbacks, Promises, and async/await — the backbone of modern JS." },
  { title: "Getting Started with REST APIs", description: "A quick overview of how RESTful APIs enable client-server communication." },
  { title: "Building a Simple Blog App", description: "From routes to rendering HTML — a fun beginner Node.js project." }
];

// HTML Template helper
function renderHTML(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f6f8fb;
          color: #111827;
          margin: 0;
          padding: 0;
        }
        header {
          background-color: #007bff;
          padding: 1rem;
          text-align: center;
        }
        header a {
          color: white;
          text-decoration: none;
          margin: 0 10px;
          font-weight: bold;
        }
        main {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1rem;
        }
        .post {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <header>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
      </header>
      <main>
        ${content}
      </main>
    </body>
    </html>
  `;
}

// Create server
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      const homeContent = `
        <h1>Welcome to My Blog</h1>
        <p>This is a simple Node.js blog server built using the built-in HTTP module.</p>
      `;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(renderHTML("Home", homeContent));

    } else if (req.url === "/posts") {
      let postsContent = "<h1>Blog Posts</h1>";
      posts.forEach((post) => {
        postsContent += `
          <div class="post">
            <h2>${post.title}</h2>
            <p>${post.description}</p>
          </div>
        `;
      });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(renderHTML("Posts", postsContent));

    } else {
      // 404 handler
      const notFoundContent = `
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      `;
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(renderHTML("404", notFoundContent));
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/html" });
    res.end(renderHTML("405", "<h1>405 - Method Not Allowed</h1>"));
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
