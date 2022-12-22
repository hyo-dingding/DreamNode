// 환경에 대한 정보를 얻을 때 사용한다.

const os = require("os");

console.log(os.EOL === "\n"); // 맥
console.log(os.EOL === "\r\n"); // 안드로이드

console.log(os.totalmem()); // 최종 메모리
console.log(os.freemem()); // 사용가능한 메모리
console.log(os.type()); // 운영체제의 타입
console.log(os.userInfo()); // 사용자 정보
console.log(os.cpus()); // cpu에 대해
console.log(os.homedir());
console.log(os.hostname());
