console.div1 = document.getElementById("div1");
console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerHTML = "여기는 <b>첫번째</b> div 태그임";
//html만 태그를 태그로 인식한다. 콘솔말고 html로 보면 됨.
div1.innerText = "여기는 <b>첫번째</b> div 태그임";
console.log(div1.innerText);

div1.textContent = "여기는 <b>첫번째</b> div 태그임";
console.log(div1.textContent);

const naver = document.getElementById("naver");
{
  const pooh = document.querySelector("#stussy");
}
console.log(naver);
// html에서 id걸어줘야함..
console.log(stussy);
naver.setAttribute("href", "http://google.com");
naver.innerText = "구글";

console.log(stussy.getAttribute("src"));
console.log(stussy.src);
console.log(stussy.alt);
stussy.alt = "스투시로고임니당";
//html에서 바뀜. alt원래 logo 에서 "스투시로고임니당"

const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");

for (let li of list) {
  console.log(li);
  li.style.backgroundColor = "pink";
  li.style.color = "#fff";
  li.style.fontSize = "20px";
}

console.log(h1.classList);
//대소문자 구분 꼭 하셈
h1.classList.add("add-h1");
//이거한 순간 html에 적용한 css가 적용이 됨
console.log(h1.classList.contains("add-h1"));
//true로 뜸

for (let el of list) {
  el.classList.add("friends");
}
//add같은 거 쓸 때는 css에서 지정이 되어있어야 함
//화장실 갔다와서 못 씀...

/* if (h1.classList.contains("add-h1")) {
    h1.classList.remove("add-h1");
} else {
    h1.classList.add("add-h1");
}

h1.classList.toggle("add-h1");
*/
// li 태그(4개)에 friends 클래스 추가해보기
for (let el of list) {
  el.classList.add("friends");
}

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

// container.append(p4, p5, "안녕하세요");
// container.appendChild(p4, p5);

//마지막 실습
const divdiv = document.createElement("div");
const imgimg = document.createElement("img");
const spanspan = document.createElement("span");

spanspan.innerText = "안녕 나는 피글렛이야";
imgimg.setAttribute("src", "./img/pooh.png");
imgimg.alt = "피글렛인척 하는 푸";

divdiv.append(imgimg, spanspan);
container.append(divdiv);

//요소삭제
const firstLi = document.querySelector("li");
console.log(firstLi);

firstLi.remove();
friends.removeChild(firstLi);
//자신이 지워지는지, 자기 자식이 지워지는지의 차이
