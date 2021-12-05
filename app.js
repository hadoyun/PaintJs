const canvas = document.querySelector("#jsCanvas");

let painting = false;

function stopPainging(){

}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainging();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
}