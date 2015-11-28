/* Create my own controls using JavaScript */
var video;

/* init() function to make sure DOM is ready */
function init() {
	video = document.getElementById("videoElement");
}

/* one function to play and pause video with one button */
function playPauseVid() {
	console.log(document.getElementById("playbtn").value);
	if(document.getElementById("playbtn").value === ">") {
		video.play();
		document.getElementById("playbtn").value = "||";
		document.getElementById("playbtn").innerHTML = "Pause";
	} else {
		video.pause();
		document.getElementById("playbtn").value = ">";
		document.getElementById("playbtn").innerHTML = "Play";
	}
}
