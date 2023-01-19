img = "";
status = "";
objects = [];
function leave(){
    window.location = "index.html";
}

function preload(){
img = loadImage("desk.jpg");
}
function setUp(){
    canvas = createCanvas(640,  420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects"
    }
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
objects = results;
}

function setUp(){
canvas = createCanvas(640,  420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting objects"
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != "")
    {
    }
    
}
