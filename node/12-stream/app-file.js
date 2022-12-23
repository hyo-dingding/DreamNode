const fs = require("fs");
// 데이터를 다 한번에 받아와옴.
//💩
const beforeMem = process.memoryUsage().rss; // 사용하는 메모리의 상태를 다 저장해 놨다가
fs.readFile("./file.txt", (_, data) => {
    // 다 읽고 읽은 데이터를 새로운 파일2에 저장함.
    fs.writeFile("./file2.txt", data, () => {}); // 파일을 읽고 쓰는 데까지
    // calculate 실제로 메모리 사용에 얼마나 큰 변화가 있는지 차이점을 MB로 출력한다.
    const afterMam = process.memoryUsage().rss;
    const diff = afterMam - beforeMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`Consumed Memory: ${consumed}MB`);
});
