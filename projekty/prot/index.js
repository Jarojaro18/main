let leftWall = 0;
let rightWall = 0;
let topWall = 0;
let bottomWall = 0;
let ballRight;
let ballBottom;
let ballLeft;
let ballTop;
let ballPos;

let verticalMove = 3;
let horizontalMove = 3;
let si;
let siBall;
let ball;
let balls;
let level;
function getPosition(){
	ball = g("#ball");
	balls = g(".balls");
	let board = g("#gameboard");
	let boardPos = board.getBoundingClientRect();
	ballPos = ball.getBoundingClientRect();
	leftWall = boardPos.left;
	rightWall = boardPos.right;
	topWall = boardPos.top;
	bottomWall = boardPos.bottom;
	
	
	ballLeft = ballPos.left;
	ballTop = ballPos.top;
	ballRight = ballPos.right;
	ballBottom = ballPos.bottom;
	
	
	level = g(".level");
	balls[0].innerText = ballsNum;
	level[0].innerText = levelNum;
	num = rand(-2, 2);
	if(num <= 0){
		-verticalMove;
	}
	if(num > 0){
		verticalMove;
	}
}
load(getPosition);
resize(getPosition);
let ballsNum = 3;
let levelNum = 1;
function ballMove(){ 
	
	let ballPos = ball.getBoundingClientRect();
	siBall = setInterval(()=>{
		ballLeft += verticalMove;
		ballTop -= horizontalMove;
		ballRight += verticalMove;
		ballBottom -= horizontalMove;
		
		if(ballLeft <= leftWall || ballRight >= rightWall){
			verticalMove *= -1;
		}
		if(ballTop <= topWall || ballBottom >= bottomWall){
			horizontalMove *= -1;
		}
		style(ball, "", "left", ballLeft + "px", "top", ballTop + "px");
		if(ballBottom >= bottomWall){
			ballsNum -= 1;
			balls[0].innerText = ballsNum;
			resetBall();
			if(ballsNum < 0){
				alert("Przegrałeś - twój wynik to: " + scoreNum);
				location.reload(); 
			}
		}
		
		
	},10);
}
load(ballMove);

function resetBall(){
	cl_Int(siBall);
	let ball = g("#ball");
	style(ball, "", "top", "60vh", "left", "calc(50% - 4px)");
	ballMove();
}
load(resetBall);