function buttonpopup() {
  alert("Thank You! We will update you on out latest projects! :D");
}

function instagrampopup() {
  alert("Sorry no Insta. This isn't a real organization.");
}

function twitterpopup() {
  alert("We got no Twitter this aint a real organization.");
}

function youtubepopup() {
  alert("Damn, no Youtube either.");
}

function redditpopup() {
  alert("¯\\_(ツ)_/¯");
}

function donatepopup() {
    alert("This organization and website isn't real. Don't worry your information is safe i think (I'm not very knowlegable of cybersecurity and programming to confirm that tho :/)");
  }

  window.addEventListener('DOMContentLoaded', function() {
    var counter = document.getElementById('tonspicked');
    var targetNumber = 7491;
    var duration = 5000;
    var interval = 50;
    var currentNumber = 0;
    var increment = Math.ceil(targetNumber / (duration / interval));
    var animation = setInterval(function() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(animation);}
    counter.textContent = currentNumber.toLocaleString();
}, interval);
});