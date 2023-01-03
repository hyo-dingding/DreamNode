const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "Hyojin";
const courses = [
    {
        name: "HTML",
        name: "CSS",
        name: "JS",
        name: "Node",
    },
];
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        ejs.renderFile("./template/index.ejs", { name }).then((data) => res.end());
    } else if (url === "/cors") {
        ejs.renderFile("./template/courses.ejs", { courses }).then((data) => res.end());
    } else {
        ejs.renderFile("./template/not-found.ejs", { name }).then((data) => res.end());
    }
});
server.listen(8080);
