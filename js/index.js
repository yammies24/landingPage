
var checked = document.querySelector("#burger");
checked.addEventListener("click",
() => {
    var list = document.querySelectorAll(".mobile > li");
    var length = document.querySelector(".mobile ul");

    document.querySelector(".mobile").classList.toggle("mobile-nav");
    document.querySelector(".mobile").classList.toggle('active');
});