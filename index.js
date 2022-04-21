
//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
/*querySelectorAll targets all the elements that have a class called ".drum".
length tells us how many elements have a class of drum*/

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    /*"this" specifies which button is clicked*/
    var buttonInnerHTML = this.innerHTML; /*this.innerHTML =
    the innerHTML e.g 'w' of the button that got pressed*/

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
//Detecting Keyboard Press
document.addEventListener("keydown", function(event) { //addEventListener is added to entire web page aka "document" so each checks all the keys on the keyboard
  makeSound(event.key); //if I press 'w' on keyboard, then makeSound function activates. key in event.key is the property of the event.
  buttonAnimation(event.key);
}); //without key in event.key the makesound function won't work for keyboard press
/*when keydown is detected, the function(event) gets called. we can tap into the event that
triggered the keyboard press ("keydown") by using event.key, which gets passed
into makeSound method or buttonAnimation method*/

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); /*new Audio = object created*/
      tom1.play();
      break; /*if it wasn't "w" then it doesn't break and moves to the next letter*/

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
      console.log(key);/*this was console.log(innerHTML) but now changed to console.log(key)
      it now logs the key that does not have a drum sound whereas before it logged button that triggered the default case*/

  }

}

 function buttonAnimation(currentKey) {
     var activeButton = document.querySelector("." + currentKey); //"." + currentKey = button pressed such as ".w (drum)" or key pressed (down)
     activeButton.classList.add("pressed"); //this adds the css .pressed

     setTimeout(function() {
       activeButton.classList.remove("pressed");
     }, 100); //100 = 0.1 sec
 }
