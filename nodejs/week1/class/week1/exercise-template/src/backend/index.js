// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const importAddHead = require("./add_head");

app.get("/", (request, response) => {
  response.send(`
  <html>
  ${importAddHead("Home")}
    <body>
        <h1>My portfolio</h1>
    </body>
  </html>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
  <html>
  ${importAddHead("Contact")}
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
    </body>
    </html>
  `);
});

app.get("/education", (request, response) => {
  response.send(`
  <html>
    ${importAddHead("Education")}
    <body>
        <h1>Education</h1>
        <p>This is an education page</p>
    </body>
    </html>
  `);
});

app.get("/skills", (request, response) => {
  response.send(`
  <html>
    ${importAddHead("Skills")}
    <body>
        <h1>Skills</h1>
        <p>This is a skills page</p>
    </body>
    </html>
  `);
});

app.get("/projects", (request, response) => {
  response.send(`
  <html>
    ${importAddHead("Projects")}
    <body>
        <h1>Projects</h1>
        <p>This is a projects page</p>
        <a href="url"></a>
        <previewUrl>
        <codeUrl>
        <img>
    </body>
    </html>
  `);
});


app.get('/test-report', function(requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
