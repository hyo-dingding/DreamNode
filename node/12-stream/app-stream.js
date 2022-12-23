const fs = require("fs");
// readStream 데이터를 조금조금씩 읽어오기 때문에 이벤트베이스이다.

// highWaterMark 버퍼사이즈 결정 시 사용한다.
const readStream = fs.createReadStream("./file.txt", {
    highWaterMark: 8, // 디폴트 64 k bytes
    encoding: "utf-8",
});

readStream.on("data", (chunk) => {
    console.log(chunk);
});
readStream();

//  createReadStream
// 호출하면 readStream이 변환이 된다. addListener를 등록시킬 수 있다. 이벤트가 발생하면 거기에 맞게 처리 할 수 있다.
// 아니면 on으 통해 닫이거나/ 데이터가 오거나/ 스트림이 끝나거나/ 에러가 발생하거나 / 열렸거나/잠시 멈췄거나 / 준비가 되었거나 /다시시작하거나
// 이런 이벤트 마다 우리가 원하는 콜백함수를 등록해 놓으면 처리 할 수있다.

//         on(event: 'close', listener: () => void): this;
//         on(event: 'data', listener: (chunk: Buffer | string) => void): this;
//         on(event: 'end', listener: () => void): this;
//         on(event: 'error', listener: (err: Error) => void): this;
//         on(event: 'open', listener: (fd: number) => void): this;
//         on(event: 'pause', listener: () => void): this;
//         on(event: 'readable', listener: () => void): this;
//         on(event: 'ready', listener: () => void): this;
//         on(event: 'resume', listener: () => void): this;
//         on(event: string | symbol, listener: (...args: any[]) => void): this;
