/*jq val() 사용*/
function getValue() {
  // input의 value를 가지고와서
  // alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정 완료 ~~");
}
//여기서 input 값은 어디로 가고 그냥 설정완료가 뜨는거?********************

/* css() 사용 */
function changeCssJs() {
  // span의 글씨크기 20px
  // 글자 색깔 빨간색
  let span = document.querySelector("span");
  span.style = "font-size:20px; color:red;";
}

function changeCssJq() {
  // 글자크기 40px
  // 글자색깔 파란색
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

function getCssJq() {
  // css 특정 속성값 가져오기
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJs() {
  // 네이버로 이동
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
  //   a.href='https://www.naver.com'
}
function changeAttrJq() {
  // 다음으로 이동
  //   target='_self' 로 변경
  $("a").attr("href", "https://www.daum.net");
  $("a").attr("target", "_self");
}

/* text() */
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "js 로 변경 &hearts;";
}

function changeTextJq() {
  $(".p-text").text("jq로 변경 &hearts;");
}

/* html() */
function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js 로 변경 &hearts;";
  console.log(changeHtmlJs);
}

function changeHtmlJq() {
  $(".p-html").html("jq로 변경 &hearts;");
}
//text랑 html이랑 하트 표시를 제대로 하는지만 봐도 비교 가능

//요소추가하기
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막 자식으로 추가 될 js";
  ul.append(li);
}
function appendJq() {
  $(".colors").append("<li>마지막 자식으로 추가 될 jq</li>");
}
//"" 안의 내용이 태그로 읽히나 js에서는 문자열로 읽힘

function prependJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerHTML = "<h4>첫 자식으로 추가된 js</h4>";
  //innerHTML이랑 inner Text차이 알겠져
  ul.prepend(li);
}
function prependJq() {
  $(".colors").prepend("<h4>첫 자식으로 추가된 jq</h4>");
}

function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "이전 형제 요소로 추가된 js";
  green.before(li);
}
//green 앞에 형제로 찍힘
function beforeJq() {
  $(".green").before("이전 형제 요소로 추가된 jq");
}

function afterJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "이후 형제 요소로 추가된 js";
  green.after(li);
}
function afterJq() {
  $(".green").after("이후 형제 요소로 추가된 jq");
}

function removeJs() {
  let li2 = document.querySelector("#li2");
  li2.remove();
}

function removeJq() {
  $("#li2").remove();
  //지울 거 선택 후 메소드 이어주면 됨
}

function emptyJs() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}
function emptyJq() {
  $(".nums").empty();
}

//요소탐색
function findParent() {
  console.log($(".child2").parent());
}
//child2 부모 콘솔창에 출력
function findParents() {
  console.log($(".child2").parents());
}
function findNext() {
  console.log($(".child2").next());
}
function findPrev() {
  console.log($(".child2").prev());
}
function findChildren() {
  console.log($(".parent").children());
  //parent  자식요소 출력
}
//메소드니까 괄호 꼭 쳐주셈

//클래스 조작 jq로
function addClass() {
  $("#hi").addClass("fs-50");
}
//style시트 같은 거 적용시킬 때  addClass로
function removeClass() {
  $("#hi").removeClass("fs-50");
}
function hasClass() {
  console.log($("#hi").hasClass("fs-50"));
}
//contains랑 같이 t,f로 나옴
function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
