import tomatoPhone from '../images/tomato-phone.png';

function contactsLoad() {

    function addContact(title, value) {
        // function to easily add menu items
        let contactsText = document.createElement('div');
        contactsText.classList.add('text-menu');
        contactsText.textContent = `${title}:   ${value}`;
        contactsPage.appendChild(contactsText);    
    }


    let pageContent = document.getElementById('pageContent');

    // Main menu div
    let contactsPage = document.createElement('div');
    contactsPage.classList.add('contacts-page');
    pageContent.appendChild(contactsPage);

    // Add image
    let phoneImage = new Image();
    phoneImage.src = tomatoPhone;
    phoneImage.classList.add('page-image');
    contactsPage.appendChild(phoneImage);

    addContact('Email','tomatobar@fruits.com');
    addContact('Phone','+44 4444 1234');
}

export { contactsLoad };