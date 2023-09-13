const questions = document.querySelectorAll(".cardquestion .question");
const plusSigns = document.querySelectorAll(".plus");

function activeAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');

  const plusSign = this.querySelector(".plus");
  plusSign.textContent = plusSign.textContent === "+" ? "-" : "+";
}

questions.forEach((item) => {
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



const texto = "• Tatuagens Autorais •";

let index = 0;
const textoElement = document.getElementById("texto");

function typeText() {
    if (index < texto.length) {
        textoElement.textContent += texto.charAt(index);
        index++;
        setTimeout(typeText, 5);
    }
}

typeText();