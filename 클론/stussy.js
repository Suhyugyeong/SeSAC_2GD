// document.getElementById("instagram").addEventListener("click", function () {
//   // Google 홈페이지를 새 탭에서 열기 위해 window.open() 메서드를 사용합니다.
//   window.open("https://www.instagram.com/stussy/", "_blank");
// });

// document.getElementById("vimeo").addEventListener("click", function () {
//   window.open("https://vimeo.com/stussy", "_blank");
// });

// document.querySelector(".snsicon i").addEventListener("click", function () {
//   window.open("https://vimeo.com/stussy", "_blank");
// });

// 첫 번째 <i> 태그에 이벤트 리스너를 추가하고 다른 사이트로 이동합니다.
document.querySelector(".fa-instagram").addEventListener("click", function () {
  window.open("https://www.instagram.com/stussy/", "_blank");
});

// 두 번째 <i> 태그에 이벤트 리스너를 추가하고 다른 사이트로 이동합니다.
document.querySelector(".fa-vimeo-v").addEventListener("click", function () {
  window.open("https://vimeo.com/stussy", "_blank");
});

document.addEventListener("DOMContentLoaded", function () {
  const addDiv1 = document.getElementsByClassName("addDiv1");

  addDiv1.addEventListener("click", function (event) {
    if (event.target.classList.contains("addDiv2")) {
      // 새로운 div 생성
      const newDiv = document.createElement("div");
      newDiv.textContent = "새로운 div가 생성되었습니다!";

      // 생성한 div에 스타일 추가 (예: 배경색)
      newDiv.style.backgroundColor = "lightblue";

      // 생성한 div를 container에 추가
      addDiv1.appendChild(newDiv);

      // 새로운 div를 클릭할 때의 동작을 추가 (생략 가능)
      newDiv.addEventListener("click", function () {
        alert("새로운 div를 클릭했습니다!");
      });
    }
  });
});
