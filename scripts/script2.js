const forEach = Array.prototype.forEach;
const flicker = document.getElementsByClassName('flicker')
const articlePos = document.getElementById('artcl');
const navLnk = document.getElementsByClassName('navLink');
var fileName = location.href.split("/").slice(-1);
const codeName = document.querySelector("div.mail>a>img");
const secretTxt = document.getElementsByClassName('secrets');
const double = document.getElementsByClassName('double');
var shake = 1;





//Animation handlers
(function () {
    Array.from(navLnk).forEach(flickCheck);
}());

function flickCheck(link) {
    if (link.pathname.indexOf(fileName) !== -1) {
        flickOn(link);
    }
}

//only sets flickOn animation for home page
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

setInterval(function(){
    if(shake === 1 && fileName.indexOf('index.html') !== -1){
    ticketShake();
}
    changeAnimationTime();
}, 3000);

function ticketShake(){
    $(".passcode").delay(3000).effect("shake", {direction: "down", times: 3, distance: 20}, 2000);
}

(function screenFlicker(){
    // $(".screen>img").effect("pulsate",{ color: $(this).css("white"), times: 5}, 1000, screenFlicker);
    $(".screen>img").animate({opacity: 0.3}, 30).animate({opacity:0.7}, 30, screenFlicker);
})();





//Secret Code Prompt reveals secret char info on suspects page
$(document).ready(function(){
      $(".passcode").click(function(){
        //dialog box wasn't opening because you didn't ref the JQuery UI src in your html scripts
        //Need to also ref a link to the JQuery ui css href for the styles
        $("#dialog").dialog({show: "clip", hide: "clip"});

    });

    $("#dialog>input").keypress(function(e){
        if (e.keyCode === 13){
            let charCode = $("#dialog>input").val();
            charCode = charCode.toLowerCase();
            window.localStorage.setItem("codePhrase", charCode);
            $("#dialog").dialog('close');
            window.location.href = "characters.html";
        };
    });
});



function codePrompt() {
    let charCode = $("dialog").input.value;
    charCode = charCode.toLowerCase();
    window.localStorage.setItem("codePhrase", charCode);
}

//Checks page name, if characters page use stored code to reveal correct char info
if (fileName.indexOf("characters.html") !== -1) {
    let charCode = window.localStorage.getItem("codePhrase");
    codeword(charCode);
}
else {
    window.localStorage.clear();
}

// Switch case to compare passcodes and reveal correct character info
function codeword(passcode) {
    switch (passcode) {
        case "shhh":
            secretTxt[0].style["display"] = "block";
            break;

        case "scarlet songbird":
            secretTxt[1].style["display"] = "block";
            break;

        case "double agent":
            secretTxt[2].style["display"] = "block";
            break;

            defualt:
                return;
    };
};


