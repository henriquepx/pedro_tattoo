const question = document.querySelectorAll(".cardquestion .question");

function activeAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

question.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);



