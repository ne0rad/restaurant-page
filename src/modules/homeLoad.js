import homeTomato from '../images/home-tomato.png';

function homeLoad() {

    let pageContent = document.getElementById('pageContent');
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis magna in nunc pellentesque, eget commodo massa vehicula. Morbi feugiat dignissim ornare. Praesent id nunc ornare, varius elit sodales, tincidunt nibh. Suspendisse id mauris nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer pharetra laoreet nisi ac ultricies. Morbi malesuada diam sed justo pharetra consequat. Maecenas accumsan, ipsum at pulvinar malesuada, quam justo congue mi, sit amet sollicitudin enim dui at nibh. Vivamus a magna metus. Curabitur posuere auctor arcu eget maximus. Ut fermentum metus eu sem hendrerit lacinia. Integer tempus erat ut laoreet.";

    function addText(title, text) {
        // Function to add text with a title to homepage
        let titleText = document.createElement('div');
        titleText.classList.add('text-title');
        titleText.textContent = title;
        homePage.appendChild(titleText);

        let pageText = document.createElement('div');
        pageText.classList.add('text-paragraph');
        pageText.textContent = text;
        homePage.appendChild(pageText);
    }

    // Create main home-page div
    let homePage = document.createElement('div');
    homePage.classList.add('home-page');
    pageContent.appendChild(homePage);

    addText('Welcome to our restaurant!', lorem);

    // Add image
    let homeImage = new Image();
    homeImage.src = homeTomato;
    homeImage.classList.add('page-image');
    homePage.appendChild(homeImage);

    addText('Our tomatoes are the best!', lorem);

    addText('Brief history of Tomato Bar', lorem);

}

export { homeLoad };