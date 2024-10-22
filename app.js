const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800
ctx.lineWidth = 1

let isPainting = false
function onMove(e){
    if(isPainting){
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke();
        return;
    }
    ctx.moveTo(e.offsetX, e.offsetY)
}
function startPainting(){
    isPainting = true
}
function canclePainting(){
    isPainting = false
}
canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", canclePainting)
canvas.addEventListener("mouseleave", canclePainting)

