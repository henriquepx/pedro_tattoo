const question = document.querySelectorAll(".cardquestion .question");

function activeAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

question.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});

const tabMenu = document.querySelectorAll('.jstabmenu');
const tabContent = document.querySelectorAll('.tabcontent');

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
})

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



