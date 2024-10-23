const fileInput = document.querySelector("#file")
const btnMode = document.querySelector("#btn_mode")
const btnClean = document.querySelector("#btn_clean")
const btnEraser = document.querySelector("#btn_eraser")
const colorOptions = Array.from(document.querySelectorAll(".color_option"))
const color = document.querySelector("#color")
const lineWidth = document.querySelector("#line_width")
const lineWidthText = document.querySelector(".stroke_text")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 800

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT
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
    lineWidthText.textContent = `${e.target.value}px`
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
        btnMode.textContent = "Fill"
    } else{
        isFilling = true
        btnMode.textContent = "Draw"
    }
}
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    }
}
function onCleanClick(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
}
function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    btnMode.textContent = "Fill"
}
function onFileChange(e){
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url
    image.addEventListener("load", function(){
        ctx.drawImage(image,0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    })
    fileInput.value = null
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
btnClean.addEventListener("click", onCleanClick)
btnEraser.addEventListener("click",onEraserClick)
fileInput.addEventListener("change", onFileChange)