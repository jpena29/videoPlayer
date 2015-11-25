/* Create my own controls using JavaScript */
var video;

/* init() function to make sure DOM is ready */
function init() {
	video = document.getElementById("videoElement");
}

/* play video */
function playvideo() {
	video.play();
}

/* pause video */
function pausevideo() {
	video.pause();
}
