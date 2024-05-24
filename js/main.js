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

/*
Swiper
================================================ */
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 70,
  loop: true,

  pagination: {
    el: "#js-gallery-pagination",
  },

  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});
