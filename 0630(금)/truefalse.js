/*
 */
var name = "홍길동";
console.log(name);
var name = "나비";
console.log(name);

let a;
console.log(a);
a = 10;
console.log(a);
// let a = 5; 이미 했으니 안 된다는 메시지 뜸

const b = 1;
console.log(b);
// b = 12; const는 재할당이 안 됨.

let q = 10;
// q - 5; 5가 나오게 하기 위해선 재할당을 반드시 해야한다.
q = q - 5;
console.log(q);

console.log(1 == "1");
console.log(1 === "1");
// == 보다는 ===를 사용하는 걸 추천하는 이유 위는 tr, 아래는 fa
console.log(1 != 1);

console.log(1 < 2);

console.log(1 + 1);
console.log(5 % 3);
// 5나누기 3 하고 나서 나머지값인 2가 나오는게 퍼센트(%)

console.log(!true);
console.log(!!true);
console.log(true || true);
console.log(true && true);

console.log("0" == "false");
console.log("0" == 0);
console.log("" == 0);
console.log(undefined == null);
// 이게 결국은 잘못된 값이기 때문에 ==대신에 ===쓰라는 얘기임.
