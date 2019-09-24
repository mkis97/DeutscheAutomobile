var slideshowStatus = 3;
var slideshowTimer = 5000;

window.onload = function () {
    slideshowLoop();
}

var startSlideshowLoop = setInterval(function () {
    slideshowLoop();
}, slideshowTimer);

function slideshowLoop() {
    if (slideshowStatus === 1) {
        document.getElementById("image2").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("image1").style.right = "0px";
            document.getElementById("image2").style.right = "-770px";
            document.getElementById("image3").style.right = "770px";
        }, 500);
        setTimeout(function () {
            document.getElementById("image2").style.opacity = "1"
        }, 1000);
        slideshowStatus = 2;
    }

    else if (slideshowStatus === 2) {
        document.getElementById("image3").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("image2").style.right = "0px";
            document.getElementById("image3").style.right = "-770px";
            document.getElementById("image1").style.right = "770px";
        }, 500);
        setTimeout(function () {
            document.getElementById("image3").style.opacity = "1";
        }, 1000);
        slideshowStatus = 3;
    }

    else if (slideshowStatus === 3) {
        document.getElementById("image1").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("image3").style.right = "0px";
            document.getElementById("image1").style.right = "-770px";
            document.getElementById("image2").style.right = "770px";
        }, 500);
        setTimeout(function () {
            document.getElementById("image1").style.opacity = "1";
        }, 1000);
        slideshowStatus = 1;
    }

}