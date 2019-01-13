const forEach = Array.prototype.forEach;
const flicker = document.getElementsByClassName('flicker')
const articlePos = document.getElementById('artcl');
const navLnk = document.getElementsByClassName('navLink');
var fileName = location.href.split("/").slice(-1);
const codeName = document.querySelector("div.mail>a>img");
const secretTxt = document.getElementsByClassName('secrets');
const double = document.getElementsByClassName('double');
// var fixedHeight = fixed.clientHeight;





//Listens for clicks on nav links
(function () {
    Array.from(navLnk).forEach(flickCheck);
}());

function flickCheck(link) {
    if (link.pathname.indexOf(fileName) !== -1) {
        flickOn(link);
    }
}

function flickOn(e) {
    e.style["animation"] = "flickon 4s linear forwards";
    // e.style["animation-delay"] = "0.5s";
    return;
}



function setProperty(duration) {
    flicker[0].style.setProperty('--animation-time', duration + 's');
    flicker[1].style.setProperty('--animation-time', duration + 5 + 's');
    // // flicker[2].style.setProperty('--animation-time', duration/2 +  's');
    // flicker[3].style.setProperty('--animation-time', duration - 2 +  's');
}

function changeAnimationTime() {
    let animationDuration = Math.random() * 5;
    console.log(animationDuration);
    setProperty(animationDuration);
}

setInterval(changeAnimationTime, 3000);



(function () {
    if (fileName.indexOf("index.html") !== -1) {
        codeName.addEventListener('click', function () {
            codePrompt();

        });
    };
})();


function codePrompt() {
    let charCode = prompt("What's the passcode??");
    charCode = charCode.toLowerCase();
    window.localStorage.setItem("codePhrase", charCode);
}

if (fileName.indexOf("characters3.html") !== -1) {
    let charCode = window.localStorage.getItem("codePhrase");
    codeword(charCode);
}

function codeword(passcode) {
    switch (passcode) {
        case "shhh":
        secretTxt[0].style["display"] = "block";
            break;

        case "scarlet songbird":
            secretTxt[1].style["display"] = "block";
            break;

        case "double agent":
            secretTxt[2].innerText = "-	Youngest of 12 children<br>\
    -	Took singing and dancing lessons<br>\
    -	Hopes of becoming a great actress one day and travelling to Europe<br>\
    -	Very strong connection to family<br>\
    -	Your real name is Ramona Simpson<br>\
    -	Farm-Raised<br>\
    See Profile Below..."
        double[0].innerText = "Ramona Simpson";
        double[1].src = "https://via.placeholder.com/150x150";
        double[2].innerText = "24";
        double[3].innerText = "Female";
        double[4].innerText = "Unknown";
        double[5].innerText = "Seattle, WA";
        double[6].innerText = "Compulsive Liar, Tenacios, Bold, Vengeful";
        secretTxt[3].innerText = "-	Only Child<br>\
    -	Illegitimate daughter of Dolores Simpson and Arthur James McCutcheon (Victim) the timber magnate<br>\
    -	Your mother and by association you both have a great hatred for Arthur who dumped your mother upon learning she was pregnant with you.<br>\
    -	You’ve been scheming and working your way to Superior Studios with plans of Arthur J. McCutcheon’s downfall<br>\
    -	You’ve been purposely having an affair with Matt Montgomery in order to infiltrate your way into Superior Studios and get close to McCutcheon<br>\
    -	You don’t think Matt suspects the affair is fake, but you don’t really care either";
        break;

        defualt:
        return;
    }
}


// (function(){
//     winW.addEventListener('change', ()=>{
//         articlePos.style.top = (window.innerWidth);
//     })
// })();

// // if (document.documentElement.clientWidth < document.documentElement.clientHeight|| window.innerWidth < window.innerHeight){
// //     articlePos.style.top = (200 - window.innerWidth/2) + "px";
//