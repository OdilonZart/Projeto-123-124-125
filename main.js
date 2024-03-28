var noseX = 0

var noseY = 0

var diferenca = 0

var pulsoDireitoX = 0

var pulsoEsquerdoX = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoad)
    poseNet.on("pose", gotPoses)
}

function modelLoad() {
    console.log("O Modelo Foi Inicializado")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        pulsoDireitoX = results[0].pose.rightWrist.x
        pulsoEsquerdoX = results[0].pose.leftWrist.x
        diferenca = floor(pulsoEsquerdoX - pulsoDireitoX)
    }
}

function draw() {
    background('#969A97')
    document.getElementById("square").innerHTML = "Tamanho da fonte será: " + diferenca + "px"
    textSize(diferenca)
    fill('#F90093');
    stroke('#F90093');
    text("Feliz Páscoa!", 50, 400)
}