import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from './app/components/App.jsx'

function handleRender(req, res) {
    const reactHtml = ReactDOMServer.renderToString(<App />);
    const htmlTemplate = `<!DOCTYPE html>
<html>
    <head>
        <title>Universal React server bundle</title>
    </head>
    <body>
        <div id="app">${reactHtml}</div>
        <script src="/public/client_bundle.js"></script>
    </body>
</html>`;
    res.send(htmlTemplate);
}

const app = express();
// server.js files compile into dist/server.config.js so dats y ./public
app.use("/public", express.static("./public"));

app.get("*", handleRender);
app.listen(3000);
console.log("App is running on http://localhost:3000");
