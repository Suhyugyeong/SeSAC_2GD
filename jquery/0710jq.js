console.log(window);
console.log($(window));
//ce.fn.init로 뜸 제이쿼리는

console.log(document);
console.log($(document));

//마우스 이벤트
//클릭
$(".p-msg").on("click", function () {
  $(".p-msg").css("color", "blue");
  // $(this).css("color", "blue");
});

$(".p-msg").click(function () {
  $(".p.msg").css("color", "red");
});
//on은 addeventListener랑 같은 의미

$(".num").click(function () {
  //   $(".num").css("color", "yellow");
  $(this).css("color", "yellow");
});
//만약 one의 색만 바뀌었으면 좋겠을 때는 num 대신 this를 쓰면 됨
//그럼 클릭되는 자신 색이 바뀔거임

//자바스크립트로 해봐용
const nums = document.querySelectorAll(".num");
//배열 형태로 들어오니까 for문 형태로 접근을 해야 됨 [one, two, three, four]
//인덱스 번호로 접근을 해야함
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    console.log(nums[i]);
    nums[i].style.color = "tomato";
  });
  //for문 안에 addEventListener 그리고 i로 인덱스
}

//마우스오버
// $(".numbers").on("mouseover", () => {
//   $(".numbers").css("background-color", "skyblue");
//   $(".numbers").append("<div>마우스 오버로 추가된 자식</div>");
// });
//hover랑 다름. 마우스를 떼고나서도 유지되는게 마우스 오버임.

// $(".numbers").mouseover(() => {
//   $(".numbers").css("background-color", "pink");
//   $(".numbers").append("<div>마우스 오버로 추가된 자식</div>");
// });
//위랑 아래 두개 똑같이 작동함. on이랑 mouseover써도 ㅇㅋㅇㅋ

//js에서 hover 안되지만 jq에서는 가능한
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
//hover는 인자가 두 개 들어감. 올렸을 때 그리고 떼었을 때 총 두 번
//이거 또 왜 안 됨????????????*******************************
//// hover() : 마우스를 올렸을 때와 떼었을 때 정의
// js에서는 없는 동작

//스크롤
window.addEventListener("scroll", () => {
  console.log("scroll");
});
$(window).scroll(() => {
  console.log("scroll!!");
});

//키보드 눌렸을 때
$(".input-key").keydown(function (e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else {
    console.log("others");
  }
});

//keydown 메소드를 쓴다는 것만 다름

$("#form").submit(function (e) {
  e.preventDefault();
  //제출 되고 나서의 내용을 preventDefault 아래에 쓰면 됨
  const todo = $("#todo").val();
  //자바스크립트는 value라는 속성에 접근해서 기록을 남김
  //제이쿼리는 val이라는 메소드를 사용
  console.log(todo);
  $(".todos").append(`<li>${todo}</li>`);
  //ul에 li를 만들기 한번에 붙이는 거

  $("#todo").val("");
  //val 안에 빈문자열 넣으면 제출 후 초기화가 되는거
});
