//canvas elment는 픽셀을 다룬다.
const canvas = document.querySelector("#jsCanvas");
// 픽셀들을 컨트롤하기 위해 가져온다.
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jscolor");

//
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

//ctx는 2가지 사이즈를 줘야한다. pixel modifier
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

// function onMouseDown(event) {
//     painting = true;
// }

function handleColorClick(event) {
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    //console.log(color);
    //ctx.strokeStyle overriding
    ctx.strokeStyle = color;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

//Array.from 메소드 - 오브젝으로 부터 array를 만든다.
//console.log(Array.from(colors));

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);