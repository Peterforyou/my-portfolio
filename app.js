
let section2 = document.querySelector('.section-2');
let what = document.querySelector('.what');
let work = document.querySelector('.work');
let aboutParagraph = document.querySelector('.about-p')
let contactParagraph = document.querySelector('.contact-cover');
let imgWork = document.querySelectorAll('.work-cover img')
let section3 = document.querySelector('.section-3');
let section4 = document.querySelector('.section-4');
let section5 = document.querySelector('.section-5');
let section6 = document.querySelector('.section-6');
let footer = document.querySelector('footer');
let footerParagraph = document.querySelector('footer p');
let message = document.querySelector('.message');
let allProjects = document.querySelector('.all-projects');
let nav = document.querySelector('.navigation nav ul');
let navChild = document.querySelectorAll('.navigation nav ul li a');
let toggler = document.querySelector('.toggler');
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  section2.classList.toggle('dark');
  section3.classList.toggle('dark');
  section4.classList.toggle('dark');
  section5.classList.toggle('dark');
  section6.classList.toggle('dark');
  what.classList.toggle('dark');
  work.classList.toggle('dark');
  aboutParagraph.classList.toggle('dark');
  contactParagraph.classList.toggle('dark');
  footer.classList.toggle('dark');
  footerParagraph.classList.toggle('dark');
  message.classList.toggle('dark');
  allProjects.classList.toggle('dark');
  nav.classList.toggle('dark');
  for (let i = 0; i < navChild.length; i++) {
        navChild[i].classList.toggle('dark');
  }
  
  for (let i = 0; i < imgWork.length; i++) {
        imgWork[i].classList.toggle('dark');
  }
})