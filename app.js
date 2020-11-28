let playCount = 0;
let userFirstGuess = "1st";
let userSecondGuess = "2nd";
let guessToggle = false;
let userWins = 0;
let userAttempts = 0;
//assigns variable to all images so they can be hidden
let allImageState = document.querySelectorAll(".memoryImg");
//assigns variable to all image divs
let imageChooser = document.querySelectorAll(".memoryDiv");

//adds event listener to all divs
for (i = 0; i < imageChooser.length; i++) {
    imageChooser[i].addEventListener("click", displayImage)
}

//function to display image on click
function displayImage(event) {
    let clickParent = event.target;
    let clickItems = clickParent.childNodes;
    let clickImg = clickItems[1];
    //Name of image which is a hidden P tag, used to match guesses
    let clickName = clickItems[3].innerHTML;
    //makes image visible
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
        userWins++;
        document.getElementById("userWins").innerHTML = "Wins: " + userWins;
    } else {
        
    }
    //hides images if playcount reaches 2 
    if (playCount >= 2) {
        //function to delay hiding of images
        setTimeout(function() {
        allImageState[0].style.visibility = "hidden";
        allImageState[1].style.visibility = "hidden";
        allImageState[2].style.visibility = "hidden";
        allImageState[3].style.visibility = "hidden";
        allImageState[4].style.visibility = "hidden";
        allImageState[5].style.visibility = "hidden";
        playCount = 0;}, 600);
        //resets user guesses
        userFirstGuess = "1st";
        userSecondGuess = "2nd";
        //adds user attempts
        userAttempts++
        //displays attempts in HTML
        document.getElementById("userAttempts").innerHTML = "Attempts: " + userAttempts;
    } else {
        
    }
}