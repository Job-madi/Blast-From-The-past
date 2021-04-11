

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


function play() {
       var audio = document.getElementById("audio");
       audio.play();
       var countDownDate = new Date();
                countDownDate.setSeconds( countDownDate.getSeconds() + 62);




       // Update the count down every 1 second
       var x = setInterval(function() {

         // Get today's date and time
         var now = new Date().getTime();

         // Find the distance between now and the count down date
         var distance = countDownDate - now;


         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

         // Output the result in an element with id="demo"
         document.getElementById("demo").innerHTML =  seconds + "s ";

         // If the count down is over, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("demo").innerHTML = "OVER";
           window.alert("Your enthusiasm level was " + countstep/5 + "%  👀 !!");
         }
       }, 1000);
     }

var countstep = 0;

     addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("button1").click();

}
else if (event.keyCode === 38) {
  event.preventDefault();
  document.getElementById("myImage1").click();
  countstep++;
}
else if (event.keyCode === 37) {
  event.preventDefault();
  document.getElementById("myImage2").click();
  countstep++;
}
else if (event.keyCode === 39) {
  event.preventDefault();
  document.getElementById("myImage3").click();
  countstep++;
}
else if (event.keyCode === 40) {
  event.preventDefault();
  document.getElementById("myImage4").click();
  countstep++;
}
});





 function changeImage1() {
           var image = document.getElementById('myImage1');
           if (image.src.match("upgreen.png")) {
               image.src = "upred.png";
           }
           else {
               image.src = "upgreen.png";
           }
       }


       function changeImage2() {
                 var image = document.getElementById('myImage2');
                 if (image.src.match("leftgreen.png")) {
                     image.src = "leftred.png";
                 }
                 else {
                     image.src = "leftgreen.png";
                 }
             }


             function changeImage3() {
                       var image = document.getElementById('myImage3');
                       if (image.src.match("rightgreen.png")) {
                           image.src = "rightred.png";
                       }
                       else {
                           image.src = "rightgreen.png";
                       }
                   }



                   function changeImage4() {
                             var image = document.getElementById('myImage4');
                             if (image.src.match("downgreen.png")) {
                                 image.src = "downred.png";
                             }
                             else {
                                 image.src = "downgreen.png";
                             }
                           }







                           timer();

                           document.getElementById("bb").addEventListener("click", timer);

                           function timer() {
                             var sec = 32;

                             function updateSec() {
                               sec--;
                               if (sec < 10) {
                                 document.querySelector("text").innerHTML = `&nbsp${sec}`;
                               } else {
                                 document.querySelector("text").innerHTML = sec;
                               }
                               if (sec === 0) {
                                 stopTimer();
                               }
                             }
                             updateSec();

                             var interval = setInterval(updateSec, 1000);

                             function stopTimer() {

                               clearInterval(interval);
                             }
                           }






                           $(document).ready(function(){
                             // Add smooth scrolling to all links
                             $("a").on('click', function(event) {

                               // Make sure this.hash has a value before overriding default behavior
                               if (this.hash !== "") {
                                 // Prevent default anchor click behavior
                                 event.preventDefault();

                                 // Store hash
                                 var hash = this.hash;

                                 // Using jQuery's animate() method to add smooth page scroll
                                 // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                                 $('html, body').animate({
                                   scrollTop: $(hash).offset().top
                                 }, 800, function(){

                                   // Add hash (#) to URL when done scrolling (default click behavior)
                                   window.location.hash = hash;
                                 });
                               } // End if
                             });
                           });
