// node가 동작하는 process에 대해 가져오는것

const process = require("process");

console.log(process.execPath); // node 위치
console.log(process.version); // node 버전
console.log(process.pid); // 프로세스 아이디
console.log(process.ppid); //프로세스 부모의 아이디
console.log(process.platform); //플랫폼에 대한 정보들
console.log(process.env); // 컴터에 저장된 환경변수에 대한것
console.log(process.uptime()); // 얼마나 실행되고 있었는지
console.log(process.cwd()); // 현재실행하고 있는 node의 경로
console.log(process.cpuUsage()); // cpu사용량

setTimeout(() => {
    console.log("setTimeout");
}, 0);

process.nextTick(() => {
    console.log("nextTick");
}); // 콜스텍에 있는 것 먼저 수행한 뒤 가장먼저 수행해줘

for (let i = 0; i < 100; i++) {
    console.log("for Loop");
}
