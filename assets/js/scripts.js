window.onload = function () {
    const hamburger = document.getElementById("hamburger-icon");
    const line1 = document.querySelector(".line-1");
    const line2 = document.querySelector(".line-2");
    const menuLists = document.querySelector(".menu-lists");

    function openCloseMenu() {
        if (menuLists.classList.contains("show")) {
            menuLists.classList.remove("show");
            line1.classList.remove("on");
            line2.classList.remove("on");
        } else {
            menuLists.classList.add("show");
            line1.classList.add("on");
            line2.classList.add("on");
        }
    }

    hamburger.addEventListener("click", openCloseMenu);
}