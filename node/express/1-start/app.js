import express from "express";

const app = express();

app.get("/sky/:id", (req, res, next) => {
    // console.log(req.path);
    // console.log(req.headers);

    // http://localhost:8080/sky/hyodingding
    console.log(req.params);
    console.log(req.params.id);

    // http://localhost:8080/sky/hyodingding/?keyword=bts
    console.log(req.query);
    console.log(req.query.keyword);

    // res.json({ name: "Hyojin" }); // 데이터 보낼 수 있음
    // res.sendStatus(400); // Bad Request
    res.setHeader("key", "value");
    res.status(201).send("created"); //created
});

app.listen(8080);
