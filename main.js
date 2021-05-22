Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}
console.log('ml5version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log("model has been loaded successfully");
}

function recognize() {

    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {

    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label
        }

}