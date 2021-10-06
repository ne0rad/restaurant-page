function contactsLoad() {
    let pageContent = document.getElementById('pageContent');

    let contactsPage = document.createElement('div');
    contactsPage.textContent = "THIS IS CONTACTS PAGE";

    pageContent.appendChild(contactsPage);
}

export { contactsLoad };