const btnMode = document.querySelector("#btn_mode")
const colorOptions = Array.from(document.querySelectorAll(".color_option"))
const color = document.querySelector("#color")
const lineWidth = document.querySelector("#line_width")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800
ctx.lineWidth = lineWidth.value

let isPainting = false
let isFilling = false

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
    ctx.fillStyle=ctx.strokeStyle = e.target.value
    // ctx.fillStyle = e.target.value
}
function onColorClick(e){
    const colorValue = e.target.dataset.color 
    color.value=ctx.fillStyle=ctx.strokeStyle = colorValue
    // ctx.fillStyle = colorValue
    // color.value = colorValue
}
function onModeClick(){
    if(isFilling){
        isFilling = false   
        btnMode.innerText = "Fill"
    } else{
        isFilling = true
        btnMode.innerText = "Draw"
    }
}
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,800,800)
    }
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", canclePainting)
canvas.addEventListener("mouseleave", canclePainting)
canvas.addEventListener("click", onCanvasClick)
lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)
colorOptions.forEach(color => color.addEventListener("click", onColorClick))

btnMode.addEventListener("click", onModeClick)