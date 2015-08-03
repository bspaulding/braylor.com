(function() {
  var images = [
    "/images/la-jolla-shores-spaulding-proposal34.jpg",
    "/images/la-jolla-shores-spaulding-proposal38.jpg",
    "/images/la-jolla-shores-spaulding-proposal39.jpg",
    "/images/la-jolla-shores-spaulding-proposal40.jpg"
  ];
  var index = 1;

  function next() {
    index += 1;
    if (index >= images.length) { index = 0; }

    var nextImageURI = images[index];
    document.body.style.backgroundImage = ["url(", nextImageURI, ")"].join("");
  }

  function start() {
    setTimeout(function() {
      next();
      start();
    }, 10000);
  }

  var nPreloaded = 0;
  function imagePreloaded() {
    nPreloaded += 1;
    console.log("image preloaded");
    if (nPreloaded >= images.length) {
      start();
    }
  }

  images.forEach(function(uri) {
    var image = new Image();
    image.src = uri;
    image.onload = imagePreloaded;
  });
}());
