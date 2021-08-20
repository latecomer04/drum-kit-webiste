var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//stores the length of list which consists of element have  drum as class


for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {



    var buttonInnerHTML = this.innerHTML;
    action(buttonInnerHTML);
    animations(buttonInnerHTML);

  })

}

document.addEventListener("keydown", function(event) {
  action(event.key);
  animations(event.key);
  //for keyboard event...event.key return the string of key that's pressed
})

//single function to handle mouse click and presses from keyboard
function action(key) {

  switch (key) {

    case "w":

      var crash = new Audio("sounds/crash.mp3");

      crash.play();

      break;


    case "a":

      var kick = new Audio("sounds/kick-bass.mp3");

      kick.play();

      break;

    case "s":

      var snare = new Audio("sounds/snare.mp3");

      snare.play();

      break;

    case "d":

      var tom1 = new Audio("sounds/tom-1.mp3");

      tom1.play();

      break;

    case "j":

      var tom2 = new Audio("sounds/tom-2.mp3");

      tom2.play();

      break;

    case "k":

      var tom3 = new Audio("sounds/tom-3.mp3");

      tom3.play();

      break;

    default:
      var tom4 = new Audio("sounds/tom-4.mp3");

      tom4.play();

      break;

  }
}

function animations(key){

  document.querySelector("."+key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}
