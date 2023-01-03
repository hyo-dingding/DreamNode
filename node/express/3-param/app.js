import express from "express";

const app = express();

app.all("/api", (req, res, next) => {
    console.log("all");
    next();
}); // /api에 한에서 처리 됨 // all /api/* 쓰면 use와 동일해짐

app.use("/sky", (req, res, next) => {
    console.log("use");
    next();
}); //sky/아무개~~ 해도 //use 가 나옴

// 미들웨어는 next()사용해서 다음으로 넘기던지 res.send("처리해줘야함")
app.get(
    "/",
    (req, res, next) => {
        console.log("first");
        // next("route"); // 다음것으로 넘어가라 first second
        // next(new Error("error"));
        if (true) {
            return res.send("Hello"); // return 사용함.
        }
        res.send("Hyojin");
    }, // 한 콜백에 두개의 send() 사용하면 error임. 한개 send() 내보내고 보내야함.
    (req, res, next) => {
        console.log("first2");
    }
);

app.get("/", (req, res, next) => {
    console.log("second");
});

// 처리할 수 없는 경로
app.use((req, res, next) => {
    res.status(404).send("Not available @@");
});
//   next(new Error("error")); 사용하면 에러가 클라이언트한테 보여지므로 같이 써줘야함
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Sorry, try later!");
});
app.listen(8080);
