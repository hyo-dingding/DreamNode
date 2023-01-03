console.log("logging...");
console.clear(); // 깨끗히 지워짐

// log level
console.log("log"); // 개발시 사용
console.info("info"); // 중요한 정보를 남길때 사용
console.warn("warn"); // 경보단계시 사용
console.error("error"); // 심각할 경우 사용자,시스템 에러

// assert 참이 아닌경우 출력됨
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object

const student = { name: "hyojin", age: "22", phone: { number: "01011112222" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 });
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time 시간측정 (성능확인 시 사용)
console.time("for loop");
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd("for loop");

// counting 몇번 호출 됬는지 확인할 때 사용

function a() {
    console.count("a function");
}
a();
console.countReset("a function");
a();

// trace 누가 해당 함수를호출했는지 알고싶을 때 사용
function f1() {
    f2();
}
function f2() {
    f3();
}

function f3() {
    console.log("f3");
    console.trace();
}
f1();
