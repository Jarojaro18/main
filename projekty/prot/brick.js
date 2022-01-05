function makeBrick(){
	let bc = g("#brickContainer");
	for(let i = 0; i < 40; i++){
		//let el = create("div");
		//addClassPlus(el, "brick", "visible");
		
		//bc.append(el);
		let el = new_element("div", bc, "", ["brick", "visible"], [], []);
	}
	brickMargin();
	brickCollision();
	
}
load(makeBrick);

function brickMargin(){
	let brick = g(".brick");
	for(let i = 0; i < brick.length; i++){
		let random_margin = rand(1, 8);
		let random_margin2 = rand(1, 8);
		style(brick, i, "margin-bottom", "5px", "margin-left", random_margin + "px", "margin-right", random_margin2 + "px");
	}
}

let scoreNum = 0;
function brickCollision(){
	let ball = g("#ball");
	let visible = g(".visible");
	let br = g(".brick");
	let score = g(".score");
	let lv = g(".level");
	score[0].innerText = scoreNum;
	let sin = setInterval(()=>{
		let ballPos = ball.getBoundingClientRect();
		ballLeft = ballPos.left;
		ballBottom = ballPos.bottom;
		ballTop = ballPos.top;
		ballCenter = ballLeft + (ball.offsetWidth/2);
		
		for(let i = 0; i < visible.length; i++){
			let visiblePos = visible[i].getBoundingClientRect();
			let visibleLeft = visiblePos.left;
			let visibleRight = visibleLeft + visible[i].offsetWidth;
			let visibleTop = visiblePos.top;
			let visibleBottom = visibleTop + visible[i].offsetHeight;
			if(ballTop <= visibleBottom && ballTop >= visibleTop && ballCenter >= visibleLeft && ballCenter <= visibleRight){
				horizontalMove *= -1;
				remClass(visible[i], "visible");
				scoreNum += 100;
				score[0].innerHTML = scoreNum;
				if(visible.length <= 0){
					resetBall();
					setTimeout(()=>{
						brickMargin();
						addClassToElements(br, "visible");
						desk_width -= 4;
						style(desk, "", "width", desk_width + "px");	
					},100);
					levelNum += 1;
					lv[0].innerText = levelNum;
					if(verticalMove > 0 ){
						verticalMove += 1;
					}
					if(verticalMove < 0 ){
						verticalMove -= 1;
					}
					if(horizontalMove < 0){
						horizontalMove -= 1;
						horizontalMove *= -1;
						
					}
					if(horizontalMove > 0){
						horizontalMove += 1;
						horizontalMove *= 1;
						
					}
					brickCollision();
					
				}
			}
		}
	},1);
}