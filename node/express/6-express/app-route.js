import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); // REST API 에서 Body를 파싱할때 사용(간편하게 body를 읽어 올 수 있음)
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body

const options = {
    dotfiles: "ignore", // 숨겨진 파일은 보여지지 않도록 무시하게
    etag: false,
    index: false,
    maxAge: "1d", // 얼마나 오랫동안 캐쉬가 가능한지
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set("x-timestamp", Date.now()); // 필요한 데이터가 있으면 헤더에 추가해서 보낼 수 있도록 만들 수 있다
    },
};
app.use(express.static("public", options));

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(8080);
