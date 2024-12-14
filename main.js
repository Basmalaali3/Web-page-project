function toggelMenu() {
const navlinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");
}
hamburger.addEventListener("click", () => {
navlinks.classList.toggle("active");
hamburger.classList.toggle("active");
})

