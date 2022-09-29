prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/uy4Fncp7h/model.json',modelLoaded);

function modelLoaded(){
    console.log('model loded!');
}

function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


  function gotResult(error, result) {
    if (error){
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        prediction_0 = result[0].label;
        speak();
        if(results[0].label == "wear mask")
        {
            document.getElementById("update_emoji").innerHTML = "&#x1F637";
        }
        if(results[0].label == "no wear mask")
        {
            document.getElementById("update_emoji").innerHTML = "&#x26d4";
        }
    }
}
