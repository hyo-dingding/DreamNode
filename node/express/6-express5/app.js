import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
const app = express();

// express 버전 5이상부터 프로미스를 return 해도 별다른 에러처리 안해도 젤마지막 에러처리 미들웨어에서 에러처리가 가능하다.
// 이전 버전일 경우 import {} from "express-async-errors"; 설치하면 비동기적인 코드도 최종적으로 에러를 포착할 수있도록 만들 수 있다.

app.use(express.json());

app.get("/file1", (req, res) => {
    try {
        const data = fs.readFile("/file1.txt");
        res.send(data);
    } catch (error) {
        res.sendStatus(404);
    }
});

app.get("/file2", (req, res) => {
    return fsAsync
        .readFile("/file.txt") //
        .then((data) => res.send(data));
});

app.get("/file3", async (req, res) => {
    const data = await fsAsync.readFile("/file.txt");
    res.send(data);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ massage: "Something went wrong" });
});
app.listen(8080);
