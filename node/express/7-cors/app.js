import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan"; // 사용자에게 요청을 받을 때마다 어떤요청을 받았는지 얼마나 걸렸는지 모니터링 시 사용
import helmet from "helmet"; // 보안에 필요한 header가 추가됨.

const app = express();

const corsOption = {
    origin: ["http://127.0.0.1:5500"],
    optionsSuccessStatus: 200,
    credentials: true, // Access-Control-Allow-Credentials: true
};

app.use(express.json()); // res.body를 보려면 express에서 제공해주는 json을 등록해야 확인할 수있다.
app.use(cookieParser());
// app.use(morgan("combined"));
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors(corsOption));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
    next();
});

app.get("/", (req, res) => {
    console.log(req.body);
    console.log(req.cookies);

    res.send("Welcome!");
});

app.listen(8080);
