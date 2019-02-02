//Sets flickon animation for home page only
if( fileName.indexOf("index.html") === -1){
    document.querySelector(".Title").style["animation"] = "none";
}

//Flicker Animation for Nav links
    (function () {
    for(i=0; i < navLnk.length; i++){
         if (navLnk[i].pathname.indexOf(fileName) !== -1) {
                flickOn(navLnk[i]);
         };
     };
 }());

function flickOn(e) {
    e.style["animation"] = "flickon 4s linear forwards";
    return;
}
