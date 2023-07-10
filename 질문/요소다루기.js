const div1 = document.getElementById("div1");

console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerHTML = "여기는 <b>첫번째</b> div 태그입니다! &hearts;";
div1.innerText = "      여기는 <b>첫번째</b> div 태그입니다! &hearts;     ";
console.log(div1.innerText);
div1.textContent = "    여기는 <b>첫번째</b> div 태그입니다! &hearts;     ";
console.log(div1.textContent);

/* 2. 속성 */

const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");
naver.setAttribute("href", "https://www.google.com");
naver.innerText = "구글";
console.log(pooh.getAttribute("src"));

// 점으로 속성에 접근후 변경
console.log(pooh.src);
console.log(pooh.alt);
pooh.alt = "푸 사진입니다!!!!";

/* 3. CSS 지정 */
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");
// 3-1. style 속성 사용

// 3-2. classList 사용
console.log(h1.classList);

h1.classList.add("add-h1");
console.log(h1.classList.contains("add-h1"));

for (let el of list) {
  el.classList.add("friends");
}

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
// [1, 2, 3, 4, 5];
for (let el of list) {
  console.log(el);
}
//이부분이 잘 이해가 안 됨 . el=element... 무슨 뜻인지??**************************************

/* 4. 요소 생성, 추가, 삭제, 접근 */
// 4-0. 요소에 접근하기
const friends = document.getElementById("friends");
const tigger = document.getElementById("tigger");

// 자식 노드에 접근
console.log("----자식노드 접근---");
console.log(friends.children); // 배열형태로 저장이 됨
console.log(friends.children[0]);

// 부모 노드에 접근
console.log("---부모 노드에 접근---");
console.log(tigger.parentNode);

// 형제 노드에 접근
console.log("---형제 노드에 접근---");
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling); // 로빈

// 4-1. 요소 생성
const container = document.querySelector(".container");

const p = document.createElement("p");
p.innerText = "추가한 p";
p.style.fontWeight = "bold";
p.style.backgroundColor = "red";

console.log(p);

// 4-2. 요소 추가 append prepend before after
container.append(p);

const p2 = document.createElement("p");
p2.innerText = "p2";
const p3 = document.createElement("p");
p3.innerText = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");
container.prepend(p2);
container.append(p3);

const h2 = document.createElement("h2");
h2.innerText = "추가된 h2";
h1.before(h2);

const h3 = document.createElement("h3");
h3.innerText = "h33333";
h1.after(h3);

// appendChild 사용
const p4 = document.createElement("p");
p4.innerText = "p4";
p4.classList.add("p-2");
const p5 = document.createElement("p");
p5.innerText = "p5";
p5.classList.add("p-3");

container.append(p4, p5, "안녕하세요");
container.appendChild(p4, p5);

// 실습!
const div = document.createElement("div");
const img = document.createElement("img");
const span = document.createElement("span");

span.innerHTML = '안녕~~ 나는 <b style="color:pink;">피글렛</b>이야!! &hearts;';
img.setAttribute("src", "./img/piglet.png");
img.alt = "피글렛!";

div.append(img, span);
container.append(div);

/* 4-3. 요소 삭제 */
// remove, removeChild
const firstLi = document.querySelector("li");
// const friends = document.getElementById("friends");
// console.log(firstLi);

// firstLi.remove();
friends.removeChild(firstLi);
