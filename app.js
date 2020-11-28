let playCount = 0;
let userFirstGuess = "1st";
let userSecondGuess = "2nd";
let clickID = "";
let guessToggle = false;

//assigns variable to all image divs
let imageChooser = document.querySelectorAll(".memoryDiv");
let allImageState = document.querySelectorAll(".memoryImg");
//adds event listener to all divs
for (i = 0; i < imageChooser.length; i++) {
    imageChooser[i].addEventListener("click", displayImage)
}
//function to display image
function displayImage(event) {
    let clickParent = event.target;
    let clickItems = clickParent.childNodes;
    let clickImg = clickItems[1];
    //Name of image to match guesses
    let clickName = clickItems[3].innerHTML;
    clickImg.style.visibility = "visible";
    
    if (guessToggle == false) {
        userFirstGuess = clickName;
        guessToggle = true;
        playCount++;
    } else {
        userSecondGuess = clickName;
        guessToggle = false;
        playCount++;
    }
    if (userFirstGuess == userSecondGuess) {
        setTimeout(function(){ alert("You win!"); }, 500);
    } else {
        
    }
    console.log(userFirstGuess + " " + userSecondGuess);
    
    if (playCount >= 2) {
        setTimeout(function() {
        allImageState[0].style.visibility = "hidden";
        allImageState[1].style.visibility = "hidden";
        allImageState[2].style.visibility = "hidden";
        allImageState[3].style.visibility = "hidden";
        allImageState[4].style.visibility = "hidden";
        allImageState[5].style.visibility = "hidden";
        playCount = 0;}, 600);
        userSecondGuess = "1st";
        userSecondGuess = "2nd";
    } else {
        
    }
}