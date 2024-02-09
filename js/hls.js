if (Hls.isSupported()) {
  const hlsVideo = document.getElementById("hls");
  const hls = new Hls();
  // bind them together
  hls.attachMedia(hlsVideo);
  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    console.log("video and hls.js are now bound together !");
    hls.loadSource(
      "https://www.youtube.com/@SmileysCuisine"
    );
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        "manifest loaded, found " + data.levels.length + " quality level"
      );
    });
  });
}