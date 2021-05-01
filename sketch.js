function setup() {
    canvas=createCanvas(600,500);
    canvas.position(400,200);
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    
    posenet=ml5.poseNet(video,ModelLoad);
    posenet.on('pose',gotPoses);
    }
    function ModelLoad() {
     console.log("Posenet is Initialised");
    }
    function preload() {
    
    }
    
    function draw() {
    image(video,0,0,600,500);
    }
    function take_snapshot() {
      save('clown-nose-photo.png')
    }
    
    function gotPoses(results) {
    if(results.length>0) {
      console.log(results);
      console.log("Left Shoulder X= "+results[0].pose.leftShoulder.x);
      console.log("Left Shoulder Y= "+results[0].pose.leftShoulder.y);
      console.log("Right Shoulder X= "+results[0].pose.rightShoulder.x);
      console.log("Right Shoulder Y= "+results[0].pose.rightShoulder.y);
    }
    }