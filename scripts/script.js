const flicker = document.getElementsByClassName('flicker');
const articlePos = document.getElementById('artcl');
const navLnk = document.getElementsByClassName('navLink');
var fileName = location.href.split("/").slice(-1);
const codeName = document.querySelector("div.mail>a>img");
const secretTxt = document.getElementsByClassName('secrets');
const screen = document.querySelector("div.screen>img");
var z = 0;


//Character Class Creation
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
            let name = this.name.split(' ');
            name = name.slice(1).join(' ');
            titlePrmpt.setAttribute('title', (`Good Evening ` + `${charTitle}` + name));
            $("#charIntro").dialog({
                modal: true,
                show: "clip",
            });
        }
}


//Character Profile Creation
var mMontgomery = new Character('Matthew Montgomery', 31, 'Male', 'Actor',
    'Hollywood, Ca', 'Handsome, Sophisticated, Confident, Aloof, Mysterious');

var tDewit = new Character('Thomas Dewit', 46, 'Male', 'Head of Acme Studios',
    'Los Angeles, CA', 'Reserved, Professional, Confident');

var kOshea = new Character('Kathleen O\'shea', 28, 'Female', 'Actress',
    'New York City, NY', 'Prima Donna, Prideful, Strong desire to perform');

var bSuWilson = new Character('Betty-Sue Wilson', 22, 'Female', 'Actress',
    'Sibley, Iowa', 'Down to Earth, Loving, Humble, Hardworking');

var rSimpson = new Character('Ramona Simpson', 24, 'Female', 'Actress',
    'Seattle, WA', 'Compulsive Liar, Tenacious, Bold, Vengeful');

var oHendrikssen = new Character('Olaf Hendrikssen', 41, 'Male', 'Director',
    'Copenhagen, Denmark', 'Work is his Passion, Attractive, Artistic, Excessive drinking and gambling habits');

var lSwallows = new Character('Lucy Swallows', 26, 'Female', 'Receptionist',
    'Boise, ID', 'Driven, Fun-loving, Promiscuous, Spoiled');

var wAndrews = new Character('Wilbur Andrews', 32, 'Male', 'Inventor',
    'Philadelphia, PA', 'Introverted, Especially shy with women, Thinker');

var iMeyers = new Character('Irma Meyers', 30, 'Female', 'Hairdresser / Actress',
    'Phoenix, AZ', 'Conservative, Creative, Driven, Proud, Self-Sufficient, Possesive');

var aChatterly = new Character('Alice Chatterly', 30 + ' (Eternally...)', 'Columnist and Self-Titled Reporter',
    'Burbank, CA', 'Driven, Doesn’t play by the rules, Loves stories and gossip, Flamboyant');

var cWilloughby = new Character('Clyde Willoughby', 38, 'Male', 'Adjuster for National Professional Underwriters',
    'New York City, NY', 'Sociable and Gregarious, Extroverted, Numbers Wiz, Careful and Conscientious');

var gRicci = new Character('Gianna Del Ricci', 25, 'Female', 'Medium',
    'Long Island, NJ', 'Expressive, Proud, Looking to Prove Something, New Jersey Classy');

//Sets random timing for Header Title Letters
function setProperty(duration) {
    flicker[0].style.setProperty('--animation-time', duration + 's');
    flicker[1].style.setProperty('--animation-time', duration + 5 + 's');
}

function changeAnimationTime() {
    let animationDuration = Math.random() * 5;
    setProperty(animationDuration);
}

setInterval(function () {
    if (fileName.indexOf("culture.html") !== -1) {
        z++
        if (z > 7) {
            z = 0;
        }
        movieSwitch();
    }
    changeAnimationTime();
}, 3000);

(function screenFlicker() {
    $(".screen>img").animate({
        opacity: 0.3
    }, 30).animate({
        opacity: 0.7
    }, 30, screenFlicker);
})();

//circles through movie titles in bg on the movies page
function movieSwitch() {
    let screenbg = document.querySelector(".screen");
    $(".screen>img").delay(100).fadeIn(200, function () {
        $(this).attr("src", "../images/movieScreens/movie-title" + z + ".jpg")
    });
};

//Secret Code Prompt on index page when the ticket is clicked
$(document).ready(function () {
    $(".passcode").click(function () {

        $("#dialog").dialog({
            modal: true,
            title: `passcode?`,
            width: 'auto',
            height: 'auto',
            show: "clip",
            hide: "clip"
        }, function () {
            $(this).css('height', 500 + 'px');
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

//Checks page name, if characters page, use stored code to reveal correct secret char info
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

        case "dope fiend":
            secretTxt[1].style["display"] = "block";
            tDewit.hello();
            break;

        case "scarlet songbird":
            secretTxt[2].style["display"] = "block";
            kOshea.hello();
            break;

        case "double agent":
            secretTxt[3].style["display"] = "block";
            bSuWilson.hello();
            break;

        case "akvavit":
            secretTxt[4].style["display"] = "block";
            oHendrikssen.hello();
            break;

        case "sheba worker":
            secretTxt[5].style["display"] = "block";
            lSwallow.hello();
            break;

        case "cancelled stamp":
            secretTxt[6].style["display"] = "block";
            wAndrews.hello();
            break;

        case "fatal attraction":
            secretTxt[7].style["display"] = "block";
            iMeyers.hello();
            break;

        case "clothesline":
            secretTxt[8].style["display"] = "block";
            aChatterly.hello();
            break;

        case "heavy sugar":
            secretTxt[9].style["display"] = "block";
            cWilloughby.hello();
            break;

        case "heebie jeebies":
            secretTxt[10].style["display"] = "block";
            gRicci.hello();
            break;

            defualt:
                return;
    };
};