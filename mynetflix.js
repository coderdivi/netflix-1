   
   document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))
   let accordion = document.getElementsByClassName("faq-page");
const totalAccordions = accordion.length;

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;
   
    if (panel.classList[1] === "faq-body") {
      e.target.classList.toggle("faq-page-active");
      panel.classList.toggle("panel-open");
      closeAllExcept(panel);
    }
  });
} 

const closeAllExcept = (pan) => {
  for (let i = 0; i < totalAccordions; i++) {
    let panelToClose = accordion[i].nextElementSibling;
    if(panelToClose !== pan){
       accordion[i].classList.remove("faq-page-active");
       panelToClose.classList.remove("panel-open");
    }
  }
}
