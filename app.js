$(document).ready(function () {
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext('2d');

    var p1y = 40;
    var pHeight = 100;
    var pWidth = 20;
    var p2y = 40;
    var ballX = 50;
    var ballY = 50;
    var ballD = 6;
    var xVelocity = 4;
    var yVelocity = 4;
    var score1 = 0;
    var score2 = 0;

    setInterval(function () {
        update();
    }, 1000 / 30);

    function update() {
        ballX += xVelocity;
        ballY += yVelocity;
        if (ballY < 0 && yVelocity < 0) {
            yVelocity = -yVelocity;
        }
        if (ballY > canvas.height && yVelocity > 0) {
            yVelocity = -yVelocity;
        }
        if (ballX < 0) {
            if (ballY > p1y && ballY < p1y + pHeight) {
                xVelocity = -xVelocity;

            } else {
                score2++;
                reset();
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(10, p1y, pWidth, pHeight);
        ctx.fillRect(ballX - ballD / 2, ballY - ballD / 2, ballD, ballD);
    }

    function reset() {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        xVelocity = -xVelocity;
        yVelocity = 4;
    }





});
