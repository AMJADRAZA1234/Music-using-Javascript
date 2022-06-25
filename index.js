var numberOfDrumButton = document.querySelectorAll(".drum").length;
//Mouse Click
for(let i=0;i<numberOfDrumButton;i++){
 
document.querySelectorAll(".drum")[i].addEventListener("click",
function () {
    console.log(this);
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
} 
//Keyboard Keypress
document.addEventListener("keypress", function(event){
    console.log(event);
   
    
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
  
    switch(key) {
        case "s":
            var audio = new Audio("assets/music/raza1.mp3");
            audio.play();
            console.log(this);
            break;
        case "r":
            var audio = new Audio("assets/music/raza2.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("assets/music/raza3.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("assets/music/raza4.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("assets/music/raza5.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("assets/music/raza6.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("assets/music/raza7.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
            console.log(this);
    }
}
function buttonAnimation(currentKey){

    var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function()
{

    activeButton.classList.remove("pressed");
    
},300);
}