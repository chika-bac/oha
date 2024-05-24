/*
スライドメニュー: js
================================================ */
// const menuIcon = document.querySelector("#js-drawer-icon");
// const menuContent = document.querySelector("#js-drawer-content");

// // エラー回避のためifが必要
// if (menuIcon) {
//   menuIcon.addEventListener("click", (e) => {
//     e.preventDefault();
//     menuIcon.classList.toggle("is-checked");
//     menuContent.classList.toggle("is-checked");
//   });
// }

/*
スライドメニュー: jQuery
================================================ */
$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

/*
アコーディオン: jQuery
================================================ */
$(".js-accordion").on("click", function (e) {
  e.preventDefault();

  // this: クリックした要素
  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});
