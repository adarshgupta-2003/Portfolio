function showSideBar() {
    const mobileBar = document.querySelector('.mob-nav-popup');
    const allContent = document.querySelector('.main-container');
    allContent.style.display = 'none';
    mobileBar.style.display="block"
}

function closeSideBar() {
    const allContent = document.querySelector('.main-container');
    allContent.style.display = 'block';
    const mobileBar = document.querySelector('.mob-nav-popup');
    mobileBar.style.display="none"
}

function qualClick(){
    const qualBody = document.querySelector('.qual-body');
    const qualText = document.querySelector('.qual');
    const expText = document.querySelector('.exp');
    const expBody = document.querySelector('.exp-body');
    const qualIcon = document.querySelector('.qualcolor');
    const expIcon = document.querySelector('.expcolor');


    qualIcon.style.color= '#6D57E0';
    expIcon.style.color= 'white';
    qualText.style.color= '#6D57E0';
    expText.style.color= 'white';

    expBody.style.display= 'none';
    qualBody.style.display= 'block';

}

function expClick(){
    const qualBody = document.querySelector('.qual-body');
    const expBody = document.querySelector('.exp-body');
    const qualText = document.querySelector('.qual');
    const qualIcon = document.querySelector('.qualcolor');
    const expText = document.querySelector('.exp');
    const expIcon = document.querySelector('.expcolor');

    qualBody.style.display= 'none';
    expBody.style.display= 'block';

    qualIcon.style.color= 'white';
    expIcon.style.color= '#6D57E0';
    qualText.style.color= 'white';
    expText.style.color= '#6D57E0';
}

// Typing Animation using Typed JS
var typed = new Typed(".type", {
    strings: ["Web Developement", "Machine Learning", "Data Science"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 50,
    backDelay: 1000,
    backSpeed: 60,
    loop: true,
  });
  

  // card nav

//   function toggleAnimation() {
//     const cardContainerInner = document.querySelector('.card');
//     cardContainerInner.style.animationPlayState =
//       cardContainerInner.style.animationPlayState === 'paused' ? 'running' : 'paused';
//   }
  
//   document.querySelector('.prev-btn').addEventListener('click', toggleAnimation);
//   document.querySelector('.next-btn').addEventListener('click', toggleAnimation);