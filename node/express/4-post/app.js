import express from "express";

const app = express();

app.use(express.json()); // body 읽을 수 있도록 적어줌
app.post("/", (req, res, next) => {
    console.log(req.body);
});

app.listen(8080);
