

window.onload = function() {
	// Video
	var video = document.getElementById("video");
	// Buttons
	var playButton = document.getElementById("video_playandpause");
	var muteButton = document.getElementById("mute");

  //var md = new MobileDetect(window.navigator.userAgent);
	var deviceDetector = function () {
			var b = navigator.userAgent.toLowerCase(), a = function (a) {
					void 0 !== a && (b = a.toLowerCase());
					return/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b) ? "tablet" : /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(b) ? "phone" : "desktop"
			};
			return{device: a(), detect: a, isMobile: "desktop" != a() ? !0 : !1, userAgent: b}
	}();

	if (deviceDetector.device != 'desktop' && video.paused == true) {
			playButton.classList.remove("pause");
	}

	//Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();
			playButton.classList.remove("icon--pause");
			playButton.classList.add('icon--play');

			// Update the button text to 'Pause'
			//playButton.classList.add("pause");
			//playButton.innerHTML = "Pause";
		} else {
			// Pause the video
			video.pause();
			playButton.classList.remove("icon--play");
			playButton.classList.add('icon--pause');
			// Update the button text to 'Play'
			//playButton.classList.remove("pause");
			//playButton.innerHTML = "Play";
		}
	});



	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.classList.add("sound-off");
			//muteButton.innerHTML = "Unmute";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.classList.remove("sound-off");
			//muteButton.innerHTML = "Mute";
		}
	});


}
