const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800

ctx.fillRect(350 - 40,200 - 30,15,100)
ctx.fillRect(260 - 40,200 - 30,60,200)
ctx.fillRect(220 - 40,200 - 30,15,100)

ctx.arc(250, 100, 50, 0, 2 * Math.PI) //arc에서 endangle값을 2로 화면 정원이 그려짐
ctx.fill()


ctx.beginPath()//색상을 변경할려면 기존의 패스를 끊고 새로 시작해야됨.
ctx.fillStyle = "cyan"
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI)
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI)
ctx.fill()