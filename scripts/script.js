var menuButton = document.getElementById("menuButton");

let clicked = false;

menuButton.addEventListener('click',function handleClick(){
    if(clicked)
    {
        console.log("Closed");
    }
    else
    {
        console.log("Opened");
    }
});
