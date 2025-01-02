import "./styles.css";
import chickenparm from "./Chicken-Parmesan-1.jpg"
import background from "./background.jpg"
import logo from "./logo.jpg"
import { createHome } from "./initial-load.js";
import { clearContent } from "./clear-content.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const content = document.getElementById('content');
const logoContainer = document.querySelector('#logo');
const logoImg = document.createElement("img");
const menuBtn = document.getElementById('menu');
const homeBtn = document.getElementById('home');
const aboutBtn = document.getElementById('about');

logoImg.id = 'logoImg';
logoImg.src = logo;
logoImg.style.boxSizing = 'border-box';
logoImg.style.padding = '10px';
logoContainer.appendChild(logoImg);
document.body.style.backgroundImage = `url(${background})`;
document.body.style.backgroundSize = 'cover'; 
document.body.style.backgroundPosition = 'center'; 
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.overflow = 'hidden';
   
createHome();

menuBtn.addEventListener('click', () => {
    clearContent();
    createMenu();
})

homeBtn.addEventListener('click', () => {
    clearContent();
    createHome();
})

aboutBtn.addEventListener('click', () => {
    clearContent();
    createAbout();
})
