console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

console.log(document.getElementById("red"));
console.log(document.getElementById("green"));
//따옴표 필수. 안 그러면 변수를 찾는거임

console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[1]);
//1은 인덱스고 항상 0부터 시작함
console.log(document.getElementsByClassName("others"));

console.log(document.getElementsByTagName("div"[5]));

console.log(document.getElementsByName("name"));

//제일 많이 쓸 쿼리셀렉터
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name='id']"));
//속성 선택자는 대괄호 안에 쓰셈

const divs = document.querySelectorAll("div");
console.log(divs);

const pinks = document.querySelectorAll(".pink");
console.log(pinks);
console.log(pinks[0]);
console.log(pinks[1]);
console.log(pinks[2]);
console.log(pinks[3]);

console.log("--------");
for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

console.log("-----");
for (let pink of pinks) {
  console.log(pink);
}
