const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800

ctx.lineWidth = 1
const colors =[
"#ff3838",
"#ffb8b8",
"#c56cf0",
"#ff9f1a",
"#fff200",
"#32ff7e",
"#7efff5",
"#18dcff",
"#7d5fff",
]

function onClick(e){
    ctx.beginPath()
    
    ctx.moveTo(Math.random()*800,Math.random()*800)
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx.strokeStyle = color
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    
}
canvas.addEventListener("mousemove", onClick)