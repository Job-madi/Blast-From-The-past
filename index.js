  //Take out car image after 5 seconds
setTimeout(function () {

    document.getElementById("overlay").style.display = "none";

}, 6000);  // 5 seconds


//Following plays the song then stops it
var myaud = document.getElementById("aud");
var k = setInterval("pauseAud()", 6000);

function playAud() {
    myaud.play();
}

function pauseAud() {
    //myaud.pause();

    clearInterval(k);
}


