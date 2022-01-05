let deskPos;
let deskPosLeft;
let deskPosRight;
let deskPosTop;
let deskPosBottom;
let desk;
let desk_width;
function deskMove(){
	desk = getId("desk");
	let gm = getId("gameboard");
	ball = getId("ball");
	let gmPos = gm.getBoundingClientRect();
	let gmLeft = gmPos.left;
	let gmRight = gmPos.right;
	let gmBottom = gmPos.bottom;
	desk_width = getId("desk").offsetWidth;
	gm.onmousemove = (event)=>{
		deskPos = desk.getBoundingClientRect();
		deskLeft = deskPos.left;
		deskRight = deskPos.right;
		deskTop = deskPos.top;
		deskBottom = deskPos.bottom;
		let left = event.clientX - desk_width/2;
		let top = event.clientY - 24;
		
		if(left < gmLeft){
			left = gmLeft;
		}
		if(left > gmRight - desk_width){
			left = gmRight - desk_width;
		}
		if(top < gmBottom - 100){
			top = gmBottom - 100;
		}
		styles(desk, "top", top + "px", "left", left + "px");	
	}
}
load(deskMove);

function deskCollision(){
	
	let si = setInterval(()=>{
		
		ballPos = ball.getBoundingClientRect();
		
		
		ballLeft = ballPos.left;
		ballRight = ballPos.right;
		ballBottom = ballPos.bottom;
		ballTop = ballPos.top;
		ballCenter = ballLeft + (ball.offsetWidth/2);
		let hm = horizontalMove;
		let vm = verticalMove;
		
		if(ballBottom >= deskTop && ballTop <= deskBottom && ballCenter >= deskLeft && ballCenter <= deskRight){
			cl_Int(siBall);
			horizontalMove = 0;
			verticalMove = 0;
			styles(ball, "top", (deskTop - 10) + "px");
			horizontalMove = hm;
			verticalMove = vm;
			horizontalMove *= -1;
			verticalMove *= 1;
			ballMove();
		}
		
	},5);
}
load(deskCollision);
