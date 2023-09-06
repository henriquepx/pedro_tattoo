const question = document.querySelectorAll(".cardquestion .question");

function activeAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

question.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});