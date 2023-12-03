# Build a frontend application for a restaurant
## (Using  The sample data is provided in the  src-->restaurantData.JSON file)

### Overview

MyRestaurant is a single-page application designed to simulate a restaurant ordering system where users can view information about the web app, explore food items, and conveniently order them by adding to the cart. The application offers a well-structured layout for an enhanced user experience.

***Product Display:*** Users can view the name and image of each food item.
The application let you see both the name and image of each product then gives you the flexibility to add between one to five 5 items to the cart at once with a single button click. 

![item image](https://github.com/codewar193/TASK/upload/main/src/assets/image/Item.png?raw=true)

 ***Cart button:*** located at the navbar in the header section, this buttons contains a counter in a badge, which counts the number of items in the cart an if there are no items in the cart, it displays 0. For a better user experience on the frontend of the application, the button undergoes a subtle bump whenever an item has being added to the cart.

![Cart button](https://github.com/codewar193/TASK/upload/main/src/assets/image/cart_button.png?raw=true)

***Cart Button:*** A click of the cart button opens the cart, the cart systems allows you to view the image, name and quantity of each particular good you have added to cart. It also gives you the flexibility to remove and add to the quantity of any particular item. You can close or open the cart at any given time.

![item image](https://github.com/codewar193/TASK/upload/main/src/assets/image/cart_item.png?raw=true)

***Navbar Links:*** All navbar links are functioning, on clicking them, they scroll you to the respective sections in the page.

**Technologies Used**

React.js: Utilized for its flexibility and extensive functionalities.
CSS: Styled components for a visually appealing layout.
React-Bootstrap: Integrated for responsive and well-designed UI components.
React-Scroll: Used for smooth scrolling functionality.
Animation on Scroll Library: Implemented for scroll animations.
SweetAlert.js Library: Employed for order validation.

I used React.js framework to bootstrap this project because of the limitless functionalities and flexibilities it brings to me, examples of the these are : 

- useContext hook which i used this to manage the state of some components in my application which includes the functioning cart system
- Props to pass some data from component to component with ease.
- Access to 3rd party libraries that made the app much better like react-scroll and react-bootstrap,react-icon, 

I then used animation on scroll for the scroll animation and sweetalert for the order validation.



### Features to be added

TFuture Enhancements
Version 1.0 serves as the initial release, with planned future improvements including:

- Code refactoring for improved cleanliness.
- Enhanced user experience features.
- Implementation of CSS modules to prevent class name clashes.


# Installation and Running

To run the application locally:

Clone or pull the project from the repository.
Open the project folder in a code editor.
Run the command npm start in your editor's terminal.
Visit the [live demo](https://dynamic-tulumba-865ec7.netlify.app/) to experience MyRestaurant.

Feel free to explore and contribute to the project for continuous improvement.



