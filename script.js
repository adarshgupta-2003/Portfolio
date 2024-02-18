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

// Typing Animation using Typed JS
var typed = new Tayped(".type", {
    strings: ["Web Developement", "Machine Learning", "and Data Science"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 50,
    backDelay: 1000,
    backSpeed: 60,
    loop: true,
  });
  