const el1 = document.getElementById("myphone");
const el2 = document.getElementById("bixel");

window.addEventListener("resize", () => {
    const columns = document.querySelectorAll(".column");

    if (window.innerWidth > 800) {
        columns.forEach(col => col.style.display = "block");
    }
});

// block →表示する　none → 消す
if (el1) el1.style.display = "block";
if (el2) el2.style.display = "block";

function changePhone() {
    //スマホ版だけ動かす
    if (window.innerWidth > 800) {
        return;
    }

    const selects = document.querySelectorAll(".selectHover");
    console.log(selects);

    const myphone = selects[0].value;
    const bixel = selects[1].value;

    const columns = document.querySelectorAll(".column");

    // 全部非表示
    columns.forEach(function (column) {
        column.style.display = "none";
    });

    // セレクトボックスで選ばれた2つを表示
    document.getElementById(myphone).style.display = "block";
    document.getElementById(bixel).style.display = "block";

    console.log("value1:", myphone);
    console.log("value2:", bixel);
    console.log("el1:", document.getElementById(myphone));
    console.log("el2:", document.getElementById(bixel));
}

const menuBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-btn");
const sidePanel = document.getElementById("side-panel");
const overlay = document.getElementById("overlay");

// メニューを開く
menuBtn.addEventListener("click", () => {
    sidePanel.classList.add("open");
    overlay.classList.add("open");
});

// メニューを閉じる（バツ印をクリック）
closeBtn.addEventListener("click", () => {
    sidePanel.classList.remove("open");
    overlay.classList.remove("open");
});

// メニューを閉じる（背景の暗い部分をクリック）
overlay.addEventListener("click", () => {
    sidePanel.classList.remove("open");
    overlay.classList.remove("open");
});