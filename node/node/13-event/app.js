const EventEmitter = require("events");
const emitter = new EventEmitter();

// [1]
// emitter.on("HyoJin", (args) => {
//     console.log("first callback - ", args);
// });

// [2]
// 등록한 콜백함수를 중지할 수도있다.
const callback1 = (args) => {
    console.log("first callback - ", args);
};
emitter.on("HyoJin", callback1);

emitter.on("HyoJin", (args) => {
    console.log("second callback - ", args);
});

emitter.emit("HyoJin", { message: 1 });
emitter.emit("HyoJin", { message: 2 });
emitter.removeListener("HyoJin", callback1); // 2번까지 호출 후 3번째 호출 때 callback1 호출 안함
emitter.removeAllListeners(); // 3번은 호출 아예안함.
emitter.emit("HyoJin", { message: 3 });

// 이벤트가 발생할 때마다 등록한 callBack 함수가 순차적으로 호출된다.
// first callback -  { message: 1 }
// second callback -  { message: 1 }
// first callback -  { message: 2 }
// second callback -  { message: 2 }
// first callback -  { message: 3 }
// second callback -  { message: 3 }

// 1. EventEmitter라는 것은 node.js 자체로도 사용가능하고
// 2. 우리가 EventEmitter를 만들어서 event에 관심있는 callback를 등록해 놓고 특정한 event를 발생할 수 있다.
// 이벤트 이름과 전달하고자하는 데이터를 명시해주면 콜백함수에서 데이터를 접근할 수있다.

// EventEmitter는 node.js 자체로도 사용하고 있는데
// createReadStream을 이용하면 ReadStream을 만들어준다.
// ReadStream이라는 class는 stream.Readable 이라는 class를 상속하고 있는데
// Readable은 node.Js.ReadableStream 에 있는 ReadableStream을 상속하고
// ReadableStream 은 결국 EventEmitter를 상속한다.
