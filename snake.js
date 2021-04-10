const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContext("2d");

let snake = [{ x: 200, y: 200 }, { x: 190, y: 200 }, { x: 180, y: 200 },
{ x: 170, y: 200 }, { x: 160, y: 200 },];


function drawSnakePart(snakePart) {
    snakeboard_ctx.fillStyle = 'lightblue';
    snakeboard_ctx.strokestyle = 'darkblue';
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

/*Function that prints the parts*/
function drawSnake() {
    snake.forEach(drawSnakePart);
}

function move_snake() {
    const head = { x: snake[0].x + dx, y: snake[0].y };
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();
}

function main() {
    setTimeout(function onTick() {
        clearCanvas();
        advanceSnake();
        drawSnake();
        // Call main again
        main();
    }, 100)
}


Putting