import menuDishImage from '../images/menu-dish.png';

function menuLoad() {

    function addMenuItem(title, price) {
        // function to easily add menu items
        let dishTitle = document.createElement('div');
        dishTitle.classList.add('text-menu');
        dishTitle.textContent = `${title}   ...........   £${price}`;
        menuPage.appendChild(dishTitle);    
    }

    let pageContent = document.getElementById('pageContent');

    // Main menu div
    let menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');
    pageContent.appendChild(menuPage);

    // Add image
    let tomatoDish = new Image();
    tomatoDish.src = menuDishImage;
    tomatoDish.classList.add('page-image');
    menuPage.appendChild(tomatoDish);


    // Add menu items
    addMenuItem('Tomato Caprese Salad Pasta', '4.99');
    addMenuItem('Raw tomato', '0.99');
    addMenuItem('Tomato Soup', '2.99');
    addMenuItem('Tomato Salad', '3.99');
    addMenuItem('Tomato Juice', '1.99');

}

export { menuLoad };