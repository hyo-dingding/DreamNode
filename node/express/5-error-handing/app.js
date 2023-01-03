import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

app.get("/file1", (req, res, next) => {
    const data = fs.readFileSync("/file.txt");
    // fs.readFile("/file1.txt", (err, data) => {});
});

app.get("/file2", (req, res, next) => {
    const data = fs.readFileSync("/file.txt");
});

app.get("/file3", (req, res, next) => {
    const data = fs.readFileSync("/file.txt");
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ massage: "Something went wrong" });
});
app.listen(8080);
