"use strict"
let imggo = document.querySelector('#centerPic')
imggo.addEventListener('load', function () { // waits for image to load
    var imgSpec = document.getElementById("centerPic");
    var imgWidth = imgSpec.naturalWidth + "px"; //gets original width of image
    var imgsrc = document.getElementById("centerPic").getAttribute('src'); //gets img src url
    console.log(imgsrc);
    document.documentElement.style.setProperty('--imgw',
        imgWidth); //changes css variable directly in DOM
    console.log(imgWidth);
    document.documentElement.style.setProperty('--imgsource', "url('" + "../" + imgsrc +
        "')"); //changes css variable directly in DOM

});