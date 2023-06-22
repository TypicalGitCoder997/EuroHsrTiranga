console.log("Hello world");

var menuButton = document.getElementById("menuButton");

let clicked = false;

menuButton.addEventListener('click',function handleClick()){
    if(clicked)
    {
        return;
    }
console.log("Button is clicked!");
