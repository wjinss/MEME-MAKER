const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800


// ctx.rect(50,50,100,100)
// ctx.rect(150,150,100,100)
// ctx.rect(250,250,100,100)
// ctx.moveTo(50, 50) //좌표를 0,0(디폴트)에서 50,50으로 옮김
// ctx.lineTo(150,50) //x150,y50의 좌표로 선을 긋는다
// ctx.lineTo(150,150)
// ctx.lineTo(50,150)
// ctx.lineTo(50,50)
// ctx.fill() 

// ctx.beginPath()
// ctx.rect(350,350,100,100)
// ctx.fillStyle="red"
// ctx.fill() 
ctx.fillRect(200,200,50,200)
ctx.fillRect(400,200,50,200)
ctx.fillRect(300,300,50,100)
ctx.fillRect(200,200,200,20)
ctx.moveTo(200,200)
ctx.lineTo(325,100)
ctx.lineTo(450,200)
ctx.fill()