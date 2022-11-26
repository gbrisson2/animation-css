//create an event listener on the button
// 1. select the button element
var button = document.querySelector('.nav-btn');

//2. Add a click event to your button
button.addEventListener('click', function(){
    //what happens when the button is clicked, what you want to do will go here. So for example, we want our navigation to show.
    document.querySelector('nav').classList.toggle('active-nav');
});