// const fs = require("fs");

// const readStream = fs.createReadStream("./file.txt");

// const writeStream = fs.createWriteStream("./file4.txt");
// // 읽어온것을 연결시킨다.
// const piping = readStream.pipe(writeStream);
// piping.on("finish", () => {
//     console.log("done!");
// });

const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");

const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
    console.log("done!");
});

const http = require("http");
const server = http.createServer((req, res) => {
    // fs.readFile("file.txt", (err, data) => {
    //     res.end(data);
    const stream = fs.createReadStream("./file.txt");
    stream.pipe(res);
});

server.listen(3000);
