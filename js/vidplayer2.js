const player = new MediaElementPlayer('mejs', {
		pluginPath: "https://www.youtube.com/@SmileysCuisine",
		success: function(mediaElement, originalNode, instance) {
			// do what you need
		}
	});