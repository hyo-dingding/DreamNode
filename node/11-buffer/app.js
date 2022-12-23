// 인코딩을 하지않으면 buffer의 내용을 적날하게 보여준다.

// 메모리에서 고정된 사이즈의 메모리 덩어리다.
// 배열의 형태이고, 메모리에 있는 그 자체를 가리키고 있다.(데이터에있는 그자체를가리킨다.)
// Fixed-size chuck of memory
// array of integers, byte of data

const fs = require("fs");

const buf = Buffer.from("Hi");
// 특정한 문자에서 버퍼를 만들어도 되고 만들 수도 있다
console.log(buf); // <Buffer 48 69> 유니코드로 출력됨  https://unicode-table.com/en/blocks/
console.log(buf.length); // 2
console.log(buf[0]); // 72  아스키코드로 출력됨 https://www.asciitable.com/
console.log(buf[1]); // 105
console.log(buf.toString()); // Hi // 디폴트가 utf8임

// toString() 인코딩을 전달할 수 있는데 Encoding을 옵션으로 줄수 있다.

// create
// * 데이터가 들어있을 수 있으므로 초기화 해주는것이 좋다.
const buf2 = Buffer.alloc(2); // 사이즈가 2개인 버퍼를 만든다 .// allocation 악자
// 메모리에서 사용가능한 메모리 덩어리를 찾아서 초기화시켜준다.
const buf3 = Buffer.allocUnsafe(2);
// 메모리에서 사용가능한 메모리 덩어리를 찾는데 초기화 시켜주지 않는것도 있다. 초기화 하지 않기 때문에 좀더 빠름
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2); // <Buffer 48 69>
buf2.copy(buf3);
console.log(buf2.toString()); // Hi
console.log(buf3); // <Buffer 48 69>
console.log(buf3.toString()); // Hi

// concat 버퍼를 모을 수 있다.
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString()); // HiHiHi
