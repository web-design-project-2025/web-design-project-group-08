const stars = document.querySelectorAll(".stars i")

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("Active") : star.classList.remove("Active")
        });
    });
});

function myFunction(x) {
    x.classList.toggle("fa-heart-Active")
}