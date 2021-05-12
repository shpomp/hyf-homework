// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const moviesRouter = require("./api/movies-router");

// This is where you want to create your is chrome browser middleware (second exercise)
// for any of the other paths, this is always my middle point
app.use("/", (request, response, next) =>{
    if (request.headers['user-agent'].includes("Chrome")){
       request.isChromeBrowser = true;
    }
    else {
        request.isChromeBrowser = false;
    }
    next();

})

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/movies", moviesRouter);


// For testing purposes only!! Used to check if the middleware function is implemented correctly
app.get("/middleware-test", async (request, response) => {
    response.send({ data: 
        { "isChromeBrowser": request.isChromeBrowser }
    });
});

module.exports = app;