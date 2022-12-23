const fs = require("fs").promises;

// reading a file
fs.readFile("./text.txt", "utf8") //
    .then((data) => console.log(data))
    .catch(console.error);
// text.tet 에는 Hello! 문구밖에 없음
// <Buffer 48 65 6c 6c 6f>  Buffer 형태로 읽어옴.
// 인자로 "utf8" 넣어주면 인코딩 되어 Hello! 보여줌

// "utf8" 자동으로 인코딩이 되도록 해준면 Hello!나옴 (encoding에 대해서 전달 해줄 수 있다.)

// flag 파일을 열때 어떤 모드로 열건지(읽기모드/쓰기모드)정의 해줄 수 있다.

// writing a file
fs.writeFile("./file.txt", " Yo! Hello, Dream Coders!") // 어디다 쓸건지 파일의 경로를 쓰고, 쓰고자하는 내용을 작성
    // .then() // Promise<void> type이기 때문에 아무것도 return 되지 않아서 then() 쓰지않아도 됨.
    .catch(console.error);

// 기존에 것에서 추가 하고 싶으면 appendFile 사용
// 비동기는 순차적을 될 수도 있고 안될 수도 있기 때문에 유의해야함
// 순서대로 작성은 했지만 promise이므로 비동기적으로 처리되기 때문에 순서가 보장되지 않는다 .
// 순서가 보장되야 한다면 then 안에서 해당하는 promise가 수행된 다음에 특정한 일을 헤야한다.

fs.appendFile("./file.txt", " Yo! Hello!!") //
    .then(() => {
        // copy 어떤 파일을 복사할 건지 , 어디로 복사할것인지
        fs.copyFile("./file.txt", "./file2.txt") //
            .catch(console.error);
    })
    .catch(console.error);

// copy 어떤 파일을 복사할 건지 , 어디로 복사할것인지
fs.copyFile("./file.txt", "./file2.txt") //
    .catch(console.error);

// folder
fs.mkdir("sub-folder") //
    .catch(console.error);

// file을 읽어올 수 있음
fs.readdir("./") //
    .then(console.log) // 무엇을 return하는지 확인하는것이 좋다. Promise<string[]>; [문자열]
    .catch(console.error);

// promise일경우 catch를 사용해서 에러를 잡아내는것이 좋다.
