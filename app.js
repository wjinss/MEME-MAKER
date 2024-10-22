const color = document.querySelector("#color")
const lineWidth = document.querySelector("#line_width")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800
ctx.lineWidth = lineWidth.value

let isPainting = false
function onMove(e){
    if(isPainting){
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke();
        return;
    }
    ctx.beginPath()
    ctx.moveTo(e.offsetX, e.offsetY)
}
function startPainting(){
    isPainting = true
}
function canclePainting(){
    isPainting = false
}
function onLineWidthChange(e){
    ctx.lineWidth = e.target.value
}
function onColorChange(e){
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
}


canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", canclePainting)
canvas.addEventListener("mouseleave", canclePainting)

lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)
