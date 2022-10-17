const scrollElement = document.getElementById("scroll-btn");

scrollElement.addEventListener("click", scrollFunction);

function scrollFunction() {
        window.scrollTo(0, 780);
}




const talkElement = document.getElementById("lets-talk");

talkElement.addEventListener("click", talkFunction);

function talkFunction() {
        location.href = "https://www.linkedin.com/in/thejasdevadiga/"
}

const creditElement = document.getElementById("credit");

creditElement.addEventListener("click", creditFunction);

function creditFunction() {
     alert("This work is based on 'Robot A04' (https://sketchfab.com/3d-models/robot-a04-c090642fcc334639a6a03ab8f6b0e446) by Lukas Hahn Graphics (https://sketchfab.com/specter) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)")
}

