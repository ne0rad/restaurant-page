import { homeLoad } from "./homeLoad";
import { menuLoad } from "./menuLoad";
import { contactsLoad } from "./contactsLoad";

function changeTab(tab) {
    let navItems = document.getElementsByClassName('nav-item');
    let pageContent = document.getElementById('pageContent').childNodes;


    // Remove active tabs from all navbar items
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active-tab');
    }

    for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].remove();
    }

    if (tab === 'navHome') homeLoad();
    else if (tab === 'navMenu') menuLoad();
    else if (tab === 'navContacts') contactsLoad();


    document.getElementById(tab).classList.add('active-tab');
}

export { changeTab };