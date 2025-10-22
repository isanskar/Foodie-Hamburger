const hamburgerIcon = document.querySelector('.hamburger-icon');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');
const navbar = document.querySelector("body > div > header > div > nav");
const goToTop = document.querySelector("body > div > main > footer > h3 > a");

hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation();
    headerContent.classList.add('menu-open');
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open');
})

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open');
})

navbar.addEventListener('click',(e)=>{
    e.stopPropagation();
})

goToTop.addEventListener('click',()=>{
    document.querySelector("body > div").scrollTo(0,0);
})