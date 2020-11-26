let playCount = 0;

//assigns variable to all image divs
let imageChooser = document.querySelectorAll(".memoryDiv");
let allImageState = document.querySelectorAll(".memoryImg");
//adds event listener to all divs
for (i = 0; i < imageChooser.length; i++) {
    imageChooser[i].addEventListener("click", displayImage)
}
//function to display image
function displayImage(event) {
    let x = event.target;
    let y = x.childNodes[1];
    y.style.visibility = "visible";
    
    if (playCount >= 2) {
        allImageState[0].style.visibility = "hidden";
        allImageState[1].style.visibility = "hidden";
        allImageState[2].style.visibility = "hidden";
        allImageState[3].style.visibility = "hidden";
        allImageState[4].style.visibility = "hidden";
        allImageState[5].style.visibility = "hidden";
        playCount = 0;
    } else {
        playCount++
    }
}