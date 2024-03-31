/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector("#js-menu-open");
const menuClose = document.querySelector("#js-menu-close");
const menuPanel = document.querySelector("#js-menu-panel");

const menuOptions = {
  duration: 800,
  easing: "ease",
  fill: "forwards",
};

// メニューを開く
menuOpen.addEventListener("click", () => {
  menuPanel.animate({ translate: ["100vw", 0] }, menuOptions);
});

// メニューを閉じる
menuClose.addEventListener("click", () => {
  menuPanel.animate({ translate: [0, "100vw"] }, menuOptions);
});
