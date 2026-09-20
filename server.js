const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Node.js App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            text-align: center;
            padding-top: 100px;
          }

          .container {
            background: white;
            width: 500px;
            margin: auto;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }

          h1 {
            color: #333;
          }

          p {
            color: #666;
          }

          button {
            padding: 12px 25px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }

          button:hover {
            background: #0056b3;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>🚀 Hello from Node.js!</h1>
          <p>My first Node.js website is running successfully.</p>
          <button onclick="alert('Node.js is working!')">
            Test Application
          </button>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
