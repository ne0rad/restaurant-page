import '../styles/style.css';
import tomatoLogo from '../images/tomato-logo.png';
import { changeTab } from './changeTab';

const MENU_ITEMS = ['Home', 'Menu', 'Contacts'];


function pageLoad() {

    // Generate main content div
    let content = document.createElement('div');
    content.id = 'content';
    document.getElementsByTagName('body')[0].appendChild(content);

    // Create a navigation bar, apply styles etc.
    let navBar = document.createElement('div');
    navBar.classList.add('nav-bar');


    // Create logo box div
    let logoBox = document.createElement('div');
    logoBox.classList.add('logo-box');
    navBar.appendChild(logoBox);

    // Add image to logo box
    const logo = new Image();
    logo.src = tomatoLogo;
    logo.id = 'tomato-logo';
    logoBox.appendChild(logo);

    let logoText = document.createElement('span');
    logoText.classList.add('big-text');
    logoText.textContent = "Tomato Bar";
    logoBox.appendChild(logoText);


    // Create box for navigation bar items
    let navItemsBox = document.createElement('div');
    navItemsBox.classList.add('nav-items-box');
    navBar.appendChild(navItemsBox);

    // Create each item in the navigation items box
    MENU_ITEMS.forEach(item => {

        let navItem = document.createElement('div');
        navItem.textContent = item;
        navItem.classList.add('nav-item');
        navItem.id = "nav" + item;
        navItem.addEventListener('click', () => changeTab('nav' + item));
        navItemsBox.appendChild(navItem);

    });

    // Create footer element
    let footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    // Create items inside footer div
    let footerItems = document.createElement('div');
    footerItems.classList.add('footer-items')
    footerItems.textContent = "Made by ne0rad";
    footer.appendChild(footerItems);


    // Create element where page content would be displayed
    let pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.id = 'pageContent';
    content.appendChild(pageContent);



    content.appendChild(navBar);
}


export { pageLoad };