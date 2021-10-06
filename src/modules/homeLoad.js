function homeLoad() {
    let pageContent = document.getElementById('pageContent');

    let homePage = document.createElement('div');
    homePage.textContent = "THIS IS A HOMEPAGE";

    pageContent.appendChild(homePage);
}

export { homeLoad };