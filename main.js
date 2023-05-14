song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


song1_status = "";
song2_status = "";


function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("song.mp3");
    
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);

}

function draw(){
    image(video, 0, 0, 600, 500);

}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}


function modelloaded(){
    console.log("model is initialized");
}

function gotposes(results){
    if(results.length > 0){
       console.log(results);

       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;

       console.log("left wrist x= " + leftWristX + ",left wrist y = " + leftWristY);

       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;

       console.log("right wrist x= " + rightWristX + ",right wrist y = " + rightWristY); 
    }
}

