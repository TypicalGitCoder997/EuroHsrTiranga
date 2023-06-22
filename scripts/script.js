console.log("Hello world");

var menuButton = document.getElementById("menuButton");

let clicked = false;

menuButton.addEventListener('click',function handleClick()){
    if(clicked)
    {
        console.log("Closed");
        click = false;
    }
    else
    {
        console.log("Opened");
        click = true;
    }
}
