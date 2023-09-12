// document.getElementById("instagram").addEventListener("click", function () {
//   // Google 홈페이지를 새 탭에서 열기 위해 window.open() 메서드를 사용합니다.
//   window.open("https://www.instagram.com/stussy/", "_blank");
// });

// document.getElementById("vimeo").addEventListener("click", function () {
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
