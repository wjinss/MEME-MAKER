const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800

// ctx.fillRect(80,20,150,250)
// ctx.strokeRect(320,350,50,60)

ctx.rect(50,50,100,100)
ctx.rect(150,150,100,100)
ctx.rect(250,250,100,100)
ctx.fill()
// ctx.stroke()
ctx.beginPath()
ctx.rect(350,350,100,100)
ctx.fillStyle="red"
ctx.fill() 