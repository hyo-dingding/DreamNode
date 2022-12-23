// 파일을 읽고 쓰고 이름 변경을 할 수 있는 fileModule

const fs = require("fs"); // 파일 시스템 가져오기

// 1. rename(필요한 인자 , callback(e, data))
//  -> error 나 data 실패했는지 성공해서 데이터를 받아왔는지 전달됨, 비동기적방식.
// 2. renameSync(....) -> 사용하지 않는것이 낫다.
// -> Blocking(동기적방식) 이여서 callback을 전달하지 않음.(에러사항을 전달 안해줌-> 항상 try{}catch(e){}로 감싸줘야함.-> 비동기적으로 변경해줌)
// 3. promises.rename().then().catch(0)

// 2번은 동기적으로 움직이기 때문에 try{}catch(e){} 사용해서 동기적으로 변경해줘야함. (error 파일이름 다름)
// try {
//     fs.renameSync("./file1.txt", "./file-new.txt");
// } catch (error) {
//     console.error(error);
// }

// console.log("Hello");

try {
    fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
    console.error(error);
}

console.log("Hello");

// callback 작성시 에러가 발생할 때만 인자를 주기 때문에 적음. 다른값은 return을 주지 않음.

fs.rename("./text-new.txt", "./text.txt", (error) => {
    console.log(error); // 에러가 발생하지 않았기 때문에 null로 출력됨.
});

console.log("hello");

//
fs.promises
    .rename("./text2.txt", "./text-new.txt") //
    .then(console.log("Done!")) // 잘 출력이 되면 Done!
    .catch(console.error);
