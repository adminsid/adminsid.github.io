
// * Global variables
const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
const width = 600;
const height = 600;
var initial_arc_radius = 25;
var ball_color = "black"
var arc_radius = initial_arc_radius;
var canvas = document.getElementById("my-canvas");
var mouse_x = 0;
var mouse_y = 0;
var speech_command;
canvas.width = width;
canvas.height = height
const toggle_button = document.getElementById("toggle-button")
var ctx = canvas.getContext("2d");
const recognition = new speechRecognition();
var is_recognition_on = false
// recognition.interimResults = true;// If true returns result while talking don't wait until we stop
recognition.continuous = true;
recognition.lang = 'en-GB'


recognition.addEventListener('result', (event) => {
    let results = event.results
    let text = (results[results.length - 1][0]['transcript']);
    console.log(text);
    speech_command = text;
})

toggle_button.addEventListener('click', (e) => {
    console.log('click');
    if (is_recognition_on) {
        toggle_button.innerHTML = "Start"
        recognition.stop();
        is_recognition_on = false;
    }else{
        toggle_button.innerHTML = "Stop"
        recognition.start();
        is_recognition_on = true;
    }
})

function textToSpeech(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance); // speak the speech/t
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function calcDist(x1, y1, x2, y2) {
    let diff_x = x1 - x2
    let diff_y = y1 - y2;
    return Math.sqrt((diff_x ** 2) + (diff_y ** 2))
}

function init() {
    canvas.addEventListener("mousemove", function (evt) {
        var mousePos = getMousePos(canvas, evt);
        mouse_x = mousePos['x']
        mouse_y = mousePos['y'];
        // console.log(mousePos);
    }, false);
    window.requestAnimationFrame(draw);
}


function draw() {
    // *Cleaning the canvas
    ctx.clearRect(0, 0, 600, 600)
    ctx.beginPath()
    let mouse_dist_from_center = calcDist(width / 2, height / 2, mouse_x, mouse_y)
    if (mouse_dist_from_center < initial_arc_radius) {
        arc_radius = mouse_dist_from_center;
    } else {
        arc_radius = initial_arc_radius
    }
    if (speech_command) {
        let words = speech_command.split(' ')
        if (words.length >= 2) {
            let command = words[words.length - 2]
            let input = words[words.length - 1]
            if (command === "colour") {
                console.log('changing color', input);
                ball_color = input
            }
            if (command === 'size') {
                let radius = parseInt(input);
                console.log(radius);
                if (!isNaN(radius)) {
                    if (radius <= 1) {
                        textToSpeech('Size too small, the minimize size is 1');
                        console.log('Size too small, the minimize size is 1')
                    } else if (radius > 300) {
                        textToSpeech("Size size limit 300.")
                        console.log("Size size limit 300.");
                    } else {
                        initial_arc_radius = radius
                    }
                }
            }
            speech_command = undefined
        }
    }
    ctx.fillStyle = ball_color;
    ctx.arc(canvas.width / 2, canvas.width / 2, arc_radius, 0, 2 * Math.PI, false);
    ctx.fill()
    //* drawing the circle with variate radius

    window.requestAnimationFrame(draw)
}
init()