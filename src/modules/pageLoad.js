import '../styles/style.css';
import tomatoLogo from '../images/tomato-logo.png';

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

    function changeTab(tab) {
        document.getElementById(active_tab).classList.remove('active-tab');
        document.getElementById(tab).classList.add('active-tab');
        active_tab = tab;
    }

    let active_tab = 'navHome';
    setTimeout(() => {
        changeTab('navHome');
    }, 10);

    content.appendChild(navBar);
}


export { pageLoad };