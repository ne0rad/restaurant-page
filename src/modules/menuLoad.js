function menuLoad() {
    let pageContent = document.getElementById('pageContent');

    let menuPage = document.createElement('div');
    menuPage.textContent = "THIS IS A MENU PAGE";

    pageContent.appendChild(menuPage);
}

export { menuLoad };