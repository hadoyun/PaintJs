const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

//ctx는 2가지 사이즈를 줘야한다.
canvas.width = 700;
canvas.height = 700;

let painting = false;



//////////////////////////////////////////////////////////////

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

//움직임 감지
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}