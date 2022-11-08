function playPause1() {
    console.log("test")
     var myVideo = document.getElementById('firstVid');
     var checkBox1 = document.getElementById('fingerstylecheck');
     if (myVideo.paused && checkBox1.checked==true)
         myVideo.play();
     else
         myVideo.pause();
 }
 
 function playPause2() {
     var myVideo2 = document.getElementById('secondVid');
     var checkBox2 = document.getElementById('drumcheck');
     if (myVideo2.paused && checkBox2.checked==true)
         myVideo2.play();
     else
         myVideo2.pause();
 }

 function playPause3() {
    var myVideo2 = document.getElementById('thirdVid');
    var checkBox3 = document.getElementById('chordscheck');
    if (myVideo2.paused && checkBox3.checked==true)
        myVideo2.play();
    else
        myVideo2.pause();
}
 
function playPause4() {
    var myVideo2 = document.getElementById('fourthVid');
    var checkBox4 = document.getElementById('stringcheck');
    if (myVideo2.paused && checkBox4.checked==true)
        myVideo2.play();
    else
        myVideo2.pause();
}
 
function playPause5() {
    var myVideo2 = document.getElementById('fifthVid');
    var checkBox5 = document.getElementById('vocalscheck');
    if (myVideo2.paused && checkBox5.checked==true)
        myVideo2.play();
    else
        myVideo2.pause();
}

function volumeSlide1() {
    var slider1 = document.getElementById('fingerstyleslider');
    var video1 = document.getElementById('firstVid');
    video1.volume = slider1.value / 100;
    video1.style.opacity = slider1.value / 100;

}

function volumeSlide2() {
    var slider1 = document.getElementById('drumslider');
    var video1 = document.getElementById('secondVid');
    video1.volume = slider1.value / 100;
    video1.style.opacity = slider1.value / 100;

}

function volumeSlide3() {
    var slider1 = document.getElementById('chordsslider');
    var video1 = document.getElementById('thirdVid');
    video1.volume = slider1.value / 100;
    video1.style.opacity = slider1.value / 100;

}

function volumeSlide4() {
    var slider1 = document.getElementById('stringslider');
    var video1 = document.getElementById('fourthVid');
    video1.volume = slider1.value / 100;
    video1.style.opacity = slider1.value / 100;

}

function volumeSlide5() {
    var slider1 = document.getElementById('vocalsslider');
    var video1 = document.getElementById('fifthVid');
    video1.volume = slider1.value / 100;
    video1.style.opacity = slider1.value / 100;

}

function sliderLight() {
    var allSliders = document.getElementsByClassName('slider');
    var allVideos = document.getElementsByTagName('video');
    if (allVideos.play == true)
        allSliders.style.backgroundColor = ('rgba(0, 115, 255, 0.618)');
    else 
        allSliders.style.backgroundColor = ('rgb(66, 66, 66)');
    
}




// STARTPAGE


