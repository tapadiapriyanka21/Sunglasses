noseX = 0;
noseY = 0;

function preload(){
    sunglasses = loadImage('https://i.postimg.cc/rpnRQs9L/kiss-me-lip-print-retro-sunglasses-r298eedddfc0b4a038b27d62c9cc0f3df-zzvmp-630-removebg-preview.png')
}
function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size( 300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Intialized');
}

function draw(){
    image(video , 0 , 0 , 300 ,300);
    image(sunglasses , noseX-150 , noseY-120 , 300 , 200);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}