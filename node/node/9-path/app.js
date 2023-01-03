const path = require("path");

// 운영체제 별로 표기법이 다름.

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // path 안에 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));

// extension 확장자 가져오기
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// 절대 경로인지 상대경로인지 isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname)); // __dirname /Users/ 절대경로로 시작함
console.log("isAbsolute?", path.isAbsolute("../")); // 상대경로 한단계 나가는 경로

// normalize
console.log(path.normalize("./folder/////sub")); //이상한 경로일 경우 알아서 고쳐줌

// join
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image")); // 이렇게 많이 사용
