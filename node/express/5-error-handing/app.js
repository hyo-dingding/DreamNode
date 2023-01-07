// import express from "express";
// import fs from "fs";
// import fsAsync from "fs/promises";

// const app = express();

// app.use(express.json());

// // 각각의 미들웨어에서 에러가 발생했을 때 적절한 메세지를 사용자에게 보내줘야한다.
// // 동기적/ 비동기적 처리하는 방법이 다르다.
// // 동기적인 코드같은 경우 실수로 에러처리하지 않으면 마지막 안전망 에러처리 미들웨어에 포착할 수있지만
// // 비동기적으로 프로미스를 쓰거나 async/await를 쓰는 에러가 발생한다면 외부에서 외부에서 에러감지할 수 없다.

// app.get("/file1", (req, res, next) => {
//     // 동기적은 이것이 다 처리 되야 다음으로 넘어간다. 여기서 에러가 발생하면 에러가 던져지기 때문에 try/catch로 잡거나
//     // 혹은 에러가 던져짐으로 마지막 안전망에 포착된다.

//     // readFileSync 동기적 방식
//     // try {
//     //     const data = fs.readFileSync("/file.txt");
//     // } catch (error) {
//     //     res.status(404).send("File not found");
//     // }

//     // 비동기는 함수가 끝날 때까지 기다리는것이 아니라 호출만 해놓고 콜백함수만 던져놓고 넘어가는 경우에는 내부적으로 에러가 발생하기 때문에 즉
//     // 에러가 외부로 던저지지 않기 때문에 아무리 try/catch 로 잡아도 잡아지지 않는다
//     // 비동기적인 경우 해당하는 콜백 함수 내에서 에러처리르 해줘야한다.

//     // readFile 비동기적 방식
//     fs.readFile("/file1.txt", (err, data) => {
//         if (error) {
//             res.status(404).send("File not found");
//         }
//     });
// });
// // 프로미스를 사용하든 비동기는 try/catch 로 에러를 잡을 수 없다. 내부적으로 에러가 발생했기 때문에
// app.get("/file2", (req, res) => {
//     fsAsync
//         .readFile("/file.txt")
//         // .then((data) => {})
//         .catch((error) => {
//             res.status(404).send("File not found");
//         });
// });

// // async/await 는 동기적이다. 그러나 app.use() 안전망에는 포착되지 않는다. 미들웨어는 promise를 return한다.
// // 함수 앞에 async를 붙여주게 되면 함수 내부에서는 await 라는 키워드를 이용해서 순차적으로 진행하는 것처럼 동기적으로
// // 처리되는것처럼 할수 있자만 비동기 async라는 마크를 해두었기 때문에 함수자체는 프로미스로 감싸진다.
// // try/catch 로만 에러를 잡을 수 있다.
// app.get("/file3", async (req, res) => {
//     try {
//         const data = await fsAsync.readFile("/file.txt");
//     } catch (error) {
//         res.status(404).send("File not found");
//     }
// });

// app.use((error, req, res, next) => {
//     console.error(error);
//     res.status(500).json({ massage: "Something went wrong" });
// });
// app.listen(8080);

//////////////////////////////////////////////////////////////
// 최신 버전

import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import {} from "express-async-errors";
const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {});

app.get("/file2", (req, res, next) => {
    return fsAsync.readFile("/file.txt");
});

app.get("/file3", async (req, res) => {
    const data = await fsAsync.readFile("/file.txt");
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ massage: "Something went wrong" });
});
app.listen(8080);
