for (let i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
      makeSound(this.innerHTML);
      keyAnimation(this.innerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  keyAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();

      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();

      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();

      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();

      break;
    case "j":
      new Audio("sounds/crash.mp3").play();

      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();

      break;
    case "l":
      new Audio("sounds/snare.mp3").play();

      break;
    default:
      consolelog(this.innerHTML);
  }
}
function keyAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")},100);
}
