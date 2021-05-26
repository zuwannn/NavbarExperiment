//variables

const nav = document.querySelector(".nav");
const navActiveIndicator = document.querySelector(".nav__active-indicator");
const buttons = document.querySelectorAll("button");
let activeButton = document.querySelector(".active");

//app

setIndexKey(buttons);

buttons.forEach(buttons => {
    buttons.addEventListener("click", buttonClick);
});

//function

function setIndexKey(arrayOfElements) {
    arrayOfElements.forEach((element, index) => {
        element.index = index;
    });
}

function buttonClick() {

    // Position the text so that it appears to not move with the button width growth
    if (this.index > activeButton.index) {
        nav.classList.remove("slide-right");
        nav.classList.add("slide-left");
    } else {
        nav.classList.remove("slide-left");
        nav.classList.add("slide-right");
    }

    // Animate the active indicator position
    const iconWidth = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--icon-width"));

    const spaceBetweenIcons = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--space-between-icons"));

    navActiveIndicator.style.transform = `translateX(${(iconWidth +
        spaceBetweenIcons) *
        this.index}px) translateY(-50%)`;

    //update the active button
    if (activeButton) activeButton.classList.remove("active");
    this.classList.add("active");
    activeButton = this;
}



