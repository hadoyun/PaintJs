//reset css가 먹히지 않는 문제



//canvas elment는 픽셀을 다룬다.
const canvas = document.querySelector("#jsCanvas");
// 픽셀들을 컨트롤하기 위해 가져온다.
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jscolor");
// size range of paintBall
const range = document.querySelector("#jsRange");

const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "black";
const CANVAS_SIZE_WIDTH = 700;
const CANVAS_SIZE_HEIGHT = 700;

//save 전에 pixel mpc가 배경을 칠하지 않아 투명색으로 인식된다.
//따라서 defuault 배경을 색을 정해준다.
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

//ctx는 2가지 사이즈를 줘야한다. pixel modifier
canvas.width = CANVAS_SIZE_WIDTH;
canvas.height = CANVAS_SIZE_HEIGHT;

let painting = false;

let bgfilling = false;

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

    // paint
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// function onMouseDown(event) {
//     painting = true;
// }

function handleColorClick(event) {
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    //console.log(color);
    //ctx.strokeStyle overriding
    ctx.strokeStyle = color;

    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const linesize = event.target.value;
    ctx.lineWidth = linesize;
}

// 내가 만들지 않은 메소드의 오타를 주의하자
function handleModeClick(event) {
    if (bgfilling === true) {
        bgfilling = false;
        mode.innerText = "paint";
    } else {
        bgfilling = true;
        mode.innerText = "fill";
        //ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick() {
    if (bgfilling === true) {
        ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);
    }
}

//우클릭 방지
function handleCM(event) {
    event.preventDefault();
}

function saveClick() {
    const image = canvas.toDataURL("image/png");
    //console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintJS[your paint!]";
    //console.log(link);
    link.click();
}

//
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    //contextmenu로의 접근을 막는다.
    canvas.addEventListener("contextmenu", handleCM);
}

//Array.from 메소드 - 오브젝으로 부터 array를 만든다.
//console.log(Array.from(colors));

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (colors) {
    Array.from(colors).forEach(color =>
        color.addEventListener("click", handleColorClick)
    );
}

if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (saveBtn) {
    saveBtn.addEventListener("click", saveClick);
}