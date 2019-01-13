const forEach = Array.prototype.forEach;
const flicker = document.getElementsByClassName('flicker')
const articlePos = document.getElementById('artcl');
const navLnk = document.getElementsByClassName('navLink');
var fileName = location.href.split("/").slice(-1);
// var fixedHeight = fixed.clientHeight;





//Listens for clicks on nav links
(function(){Array.from(navLnk).forEach(addLstn)
}());

// //Right now since movies href is # it loops back to index so it won't get affected
function addLstn(link){ 
    if(link.pathname.indexOf(fileName) !== -1){
        link.style["text-shadow"] = "1px 1px 10px rgb(255, 253, 117), -1px -1px 10px rgb(255, 253, 117)";
        link.style["opacity"] = 1;
    }

    link.addEventListener('click', function(e){
        Array.from(navLnk).forEach(flickOff);
        flickOn(e.target);
    });
};

//     // if(link.pathname.indexOf(fileName) !== -1){
//     //     link.style["animation"] = "flickoff 1s linear forwards";
//     // }
// }

var flickOn = function(e){
    e.style["animation"] = "flickon 4s linear forwards";
    e.style["animation-delay"] = "0.5s";
    return;
}

var flickOff = function(link){
    if(link.pathname.indexOf(fileName) !== -1){
        link.style["animation"] = "flickoff 1s linear forwards";
        link.style.setProperty("animation","flickoff 1s linear forwards");
        return;
    }
}




function setProperty(duration){
    flicker[0].style.setProperty('--animation-time', duration + 's');
    flicker[1].style.setProperty('--animation-time', duration + 5 +  's');
    // // flicker[2].style.setProperty('--animation-time', duration/2 +  's');
    // flicker[3].style.setProperty('--animation-time', duration - 2 +  's');
}

function changeAnimationTime(){
    let animationDuration = Math.random()*5;
    console.log(animationDuration);
    setProperty(animationDuration);
}

setInterval(changeAnimationTime, 3000);


// (function(){
//     winW.addEventListener('change', ()=>{
//         articlePos.style.top = (window.innerWidth);
//     })
// })();

// // if (document.documentElement.clientWidth < document.documentElement.clientHeight|| window.innerWidth < window.innerHeight){
// //     articlePos.style.top = (200 - window.innerWidth/2) + "px";
// 