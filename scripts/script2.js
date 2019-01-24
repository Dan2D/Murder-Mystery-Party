const forEach = Array.prototype.forEach;
const flicker = document.getElementsByClassName('flicker');
const articlePos = document.getElementById('artcl');
const navLnk = document.getElementsByClassName('navLink');
var fileName = location.href.split("/").slice(-1);
const codeName = document.querySelector("div.mail>a>img");
const secretTxt = document.getElementsByClassName('secrets');
const double = document.getElementsByClassName('double');
const screen = document.querySelector("div.screen>img");
var shake = 1;
var z = 0;

// (function(){
//     if(window.innerWidth < 768 ){
// var h = Math.max(document.documentElement.clientHeight);
// var w = Math.max(document.documentElement.clientWidth);
// $("html").css({"width": w, "height": h});
// $("body").css({"width": w, "height": h});}
// }());

function Character(name, age, sex, occ, hTown, chars) {
    this.name = name,
        this.age = age,
        this.sex = sex,
        this.occ = occ,
        this.hTown = hTown,
        this.chars = chars,
        this.hello = function () {
            if (this.sex.toLowerCase() === "male") {
                var charTitle = "Mr.";
            } else {
                var charTitle = "Ms.";
            }
            const titlePrmpt = document.getElementById("charIntro");
            titlePrmpt.setAttribute('title', (`Good Evening ` + `${charTitle}` + this.name.split(' ')[1]));
            $("#charIntro").dialog({
                show: "clip"
            });
        }
}


//Character Creation
var mMontgomery = new Character('Matthew Montgomery', 31, 'Male', 'Actor',
    'Hollywood, Ca', 'Handsome, Sophisticated, Confident, Aloof, Mysterious');

var kOshea = new Character('Kathleen O\'shea', 28, 'Female', 'Actress',
    'New York City, NY', 'Prima Donna, Prideful, Strong desire to perform');

var bSuWilson = new Character('Betty Sue Wilson', 22, 'Female', 'Actress',
    'Sibley, Iowa', 'Down to Earth, Loving, Humble, Hardworking');

var rSimpson = new Character('Ramona Simpson', 24, 'Female', 'Actress',
    'Seattle, WA', 'Compulsive Liar, Tenacious, Bold, Vengeful');

var oHendrikssen = new Character('Olaf Hendrikssen', 41, 'Male', 'Director',
    'Copenhagen, Denmark', 'Work is his Passion, Attractive, Artistic, Excessive drinking and gambling habits');


var wAndrews = new Character('Wilbur Andrews', 32, 'Male', 'Inventor',
    'Philadelphia, PA', 'Introverted, Especially shy with women, Thinker');

var iMeyers = new Character('Irma Meyers', 30, 'Female', 'Hairdresser / Actress',
'Phoenix, AZ', 'Conservative, Creative, Driven, Proud, Self-Sufficient, Possesive');

var aChatterly = new Character('Alice Chatterly', 30 + ' (Eternally...)', 'Columnist and Self-Titled Reporter',
'Burbank, CA', 'Driven, Doesn’t play by the rules, Loves stories and gossip, Flamboyant');

var cWilloughby = new Character('Clyde Willoughby', 38, 'Male', 'Adjuster for National Professional Underwriters',
'New York City, NY', 'Characteristics: able and Gregarious, Extroverted, Numbers Wiz, Careful and Conscientious');


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
    setProperty(animationDuration);
}

setInterval(function () {
    if (shake === 1 && fileName.indexOf('index.html') !== -1) {
        ticketShake();
    }
    if (fileName.indexOf("culture.html") !== -1) {
        z++
    if (z>7){
        z=0;
    }
        movieSwitch();
    }
    changeAnimationTime();
}, 3000);

function ticketShake() {
    $(".passcode").delay(3000).effect("shake", {
        direction: "down",
        times: 50,
        distance: 2
    }, 700);
}

(function screenFlicker() {
    // $(".screen>img").effect("pulsate",{ color: $(this).css("white"), times: 5}, 1000, screenFlicker);
    $(".screen>img").animate({
        opacity: 0.3
    }, 30).animate({
        opacity: 0.7
    }, 30, screenFlicker);
})();

//circles through movie titles in bg on the movies page
function movieSwitch(){
    let screenbg = document.querySelector(".screen"); 
    $(".screen>img").delay(100).fadeIn(200, function(){
            $(this).attr("src", "images/movie-title" + z + ".jpg")});
};


    // screenbg.style["background"] = "url(\"images/countdown.jpg\")";
    // screenbg.style["background"] = "url(\"images/old\ screen.jpg\")";
    // screen.setAttribute('src', "images/movie-title" + z + ".jpg");




//Secret Code Prompt reveals secret char info on suspects page
$(document).ready(function () {
    $(".passcode").click(function () {
        //dialog box wasn't opening because you didn't ref the JQuery UI src in your html scripts
        //Need to also ref a link to the JQuery ui css href for the styles
        $("#dialog").dialog({
            show: "clip",
            hide: "clip"
        });

    });

    //records user input when enter is pressed and redirects you to suspects page
    $("#dialog>input").keypress(function (e) {
        if (e.keyCode === 13) {
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
} else {
    window.localStorage.clear();
}

// Switch case to compare passcodes and reveal correct character info
function codeword(passcode) {
    switch (passcode) {
        case "shhh":
            secretTxt[0].style["display"] = "block";
            mMontgomery.hello();
            break;

        case "scarlet songbird":
            secretTxt[1].style["display"] = "block";
            kOshea.hello();
            break;

        case "double agent":
            secretTxt[2].style["display"] = "block";
            bSuWilson.hello();
            break;

        case "akvavit":
            secretTxt[3].style["display"] = "block";
            oHendrikssen.hello();
            break;

        case "cancelled stamp":
            secretTxt[4].style["display"] = "block";
            wAndrews.hello();
            break;

        case "fatal attraction":
            secretTxt[5].style["display"] = "block";
            iMeyers.hello();
            break;

        case "clothesline":
            secretTxt[6].style["display"] = "block";
            aChatterly.hello();
            break;

        case "heavy sugar":
            secretTxt[7].style["display"] = "block";
            cWilloughby.hello();
            break;

            defualt:
                return;
    };
};