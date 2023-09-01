// let buttonList = document.querySelectorAll("button");
// console.log(buttonList);
// let sound = new Audio('sounds/crash.mp3');

// buttonList.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log(this);
//         this.style.cssText = "color: white;"
//     })
// });


let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let playSound;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function (event) {
        let button = event.key; 
        makeSound(button);
        buttonAnimation(button);
    })
}

function makeSound(buttonKey) {
    switch(buttonKey) {
        case 'w':
            playSound = new Audio("sounds/tom-1.mp3")
            playSound.play();
            break;
        case 'a':
            playSound = new Audio("sounds/tom-2.mp3")
            playSound.play();
            break;
        case 's':
            playSound = new Audio("sounds/tom-3.mp3")
            playSound.play();
            break;
        case 'd':
            playSound = new Audio("sounds/tom-4.mp3")
            playSound.play();
            break;
        case 'j':
            playSound = new Audio("sounds/crash.mp3")
            playSound.play();
            break;
        case 'k':
            playSound = new Audio("sounds/kick-bass.mp3")
            playSound.play();
            break;
        case 'l':
            playSound = new Audio("sounds/snare.mp3")
            playSound.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(buttonKey) {
    let activeButton = document.querySelector("." + buttonKey);
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
