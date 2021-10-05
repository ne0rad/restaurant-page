import '../styles/style.css';

const MENU_ITEMS = ['Home','Menu','About','Contacts'];

export default function pageLoad() {

    // Get the main div
    let content = document.getElementById('content');

    // Create a navigation bar, apply styles etc.
    let navBar = document.createElement('div');
    navBar.classList.add('menu');

    // Create each item in the navigation bar
    let navItem = document.createElement('div');
    navItem.textContent = 'Home';

    navBar.appendChild(navItem);
    content.appendChild(navBar);
}