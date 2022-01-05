let rectangle_l;
let rectangle_r;
let pinball;
let points_c;
function make_ball(){
	rectangle_r = g("#rectangle_right");
	rectangle_l = g("#rectangle_left");
	pinball = g("#pinball_container");
	points_c = g("#points");
	let rectangle_width = rectangle_r.offsetWidth;
	let ball_size = rectangle_width/10;
	for(let i = 0; i < 10; i++){
		let el = new_element("div", rectangle_r, "", ["ball"], ["width", ball_size + "px", "height", ball_size + "px", "top", -(ball_size/2) + "px", "left", ball_size * i + "px"], []);
		let el2 = new_element("div", rectangle_l, "", ["ball"], ["width", ball_size + "px", "height", ball_size + "px", "top", -(ball_size/2) + "px", "left", ball_size * i + "px"], []);
	}
	
}
load(make_ball);

let points = 0;

let deg_r = (-45);
let deg_l = 45;
let si2;
let si3;
let si4;
let si5;
function rectangle_move(){
	
		window.onkeyup = (event)=>{
			if(event.keyCode == 190){
				cl_Int(si2);
				cl_Int(si3);
				si2 = setInterval(()=>{
					style(rectangle_r, "", "transform", "rotateZ("+deg_r+"deg)");
					deg_r += 4;
					if(deg_r >= 0){
						deg_r = 0;
						cl_Int(si2);
						si3 = setInterval(()=>{
							style(rectangle_r, "", "transform", "rotateZ("+deg_r+"deg)");
							deg_r -= 4;
							if(deg_r <= -45){
								deg_r = -45;
								cl_Int(si3);
							}
						},10);
					}
				}, 10);
			}
			if(event.keyCode == 90){
				cl_Int(si4);
				cl_Int(si5);
				si4 = setInterval(()=>{
					style(rectangle_l, "", "transform", "rotateZ("+deg_l+"deg)");
					deg_l -= 4;
					if(deg_l <= 0){
						deg_l = 0;
						cl_Int(si4);
						si5 = setInterval(()=>{
							style(rectangle_l, "", "transform", "rotateZ("+deg_l+"deg)");
							deg_l += 4;
							if(deg_l >= 45){
								deg_l = 45;
								cl_Int(si5);
							}
						},10);
					}
				}, 10);
			}
		}
}
load(rectangle_move);

let ball_speedY = 10;
let ball_speedX = -5;
function ball_move(){
	let ball = g("#ball");
	let balls = g(".ball");
	let res = g("#data");
	let trigger = g(".trigger");
	let y = ball.offsetTop;
	let pinball_center = pinball.offsetLeft + pinball.offsetWidth/2;
	let pinball_bottom = pinball.offsetTop + pinball.offsetHeight;
	let ball_interval = setInterval(()=>{
		let ball_bcr = ball.getBoundingClientRect();
		let ball_centerX = ball_bcr.left + ball.offsetWidth/2;
		let ball_centerY = ball_bcr.top + ball.offsetHeight/2;
		let ball_left = ball_bcr.left;
		let ball_top = ball_bcr.top;
		let ball_right = ball_bcr.right;
		let ball_bottom = ball_bcr.bottom;

		ball_speedY += 0.05;
		
		for(let i = 0; i < balls.length; i++){
			let balls_bcr = balls[i].getBoundingClientRect();
			let balls_centerX = balls_bcr.left + balls[i].offsetWidth/2;
			let balls_centerY = balls_bcr.top + balls[i].offsetHeight/2;
			let distance = Math.sqrt(Math.pow((balls_centerX - ball_centerX), 2) +  Math.pow((balls_centerY - ball_centerY), 2));
			if(distance <= ((ball.offsetWidth/2)+15)){
				ball_speedY = -15;
				if(ball_left < window.innerWidth/2){
					ball_speedX = ((balls_centerX - pinball.offsetLeft)/(pinball_bottom - balls_centerY))*5;
				}
				if(ball_left > window.innerWidth/2){
					ball_speedX = ((balls_centerX - (pinball.offsetLeft + pinball.offsetWidth))/(pinball_bottom - balls_centerY))*5;
				}
				
			}
		}
		for(let j = 0; j < trigger.length; j++){
			let trigger_bcr = trigger[j].getBoundingClientRect();
			let trigger_centerX = trigger_bcr.left + trigger[j].offsetWidth/2;
			let trigger_centerY = trigger_bcr.top + trigger[j].offsetHeight/2;
			let distance = Math.sqrt(Math.pow((trigger_centerX - ball_centerX), 2) +  Math.pow((trigger_centerY - ball_centerY), 2));
			if(distance <= ((ball.offsetWidth/2)+(trigger[j].offsetWidth/2))){
				if(ball_centerX <= trigger_centerX && ball_centerY < trigger_centerY){
					cl_Int(ball_interval);
					ball_speedX = (-1 * Math.abs(ball_speedX));
					ball_speedY = (-1 * Math.abs(ball_speedY));
				}
				if(ball_centerX > trigger_centerX && ball_centerY < trigger_centerY){
					cl_Int(ball_interval);
					ball_speedX = Math.abs(ball_speedX);
					ball_speedY = (-1 * (Math.abs(ball_speedY) + 1));
				}
				if(ball_centerX <= trigger_centerX && ball_centerY >= trigger_centerY){
					cl_Int(ball_interval);
					ball_speedX = (-1 * Math.abs(ball_speedX));
					ball_speedY = Math.abs(ball_speedY) + 1;
				}
				if(ball_centerX > trigger_centerX && ball_centerY >= trigger_centerY){
					cl_Int(ball_interval);
					ball_speedX = Math.abs(ball_speedX);
					ball_speedY = Math.abs(ball_speedY) + 1;
				}
				
				style(trigger, j, "background-color", "blue");
				setTimeout(()=>{
					ball_move();
				}, 10);
				setTimeout(()=>{
					style(trigger, j, "background-color", "red");
					let pts = trigger[j].dataset.points;
					points += parseInt(pts);
					points_c.innerHTML = points;
				},200);
				

				
			}
		}
		if(ball_speedY >= 15){
			ball_speedY = 15;
		}
		if(ball_speedY <= -15){
			ball_speedY = -15;
		}
		if(ball_speedX > 15){
			ball_speedX = 15;
		}
		if(ball_speedX < -15){
			ball_speedX = -15;
		}
		if(ball_speedX < 5 && ball_speedX >= 0){
			ball_speedX = 5;
		}
		if(ball_speedX > (-5) && ball_speedX < 0){
			ball_speedX = -5;
		}
		if(ball_top <= 10){
			ball_speedY = (-1 * ball_speedY);
			style(ball, "", "top", "10px");
		}
		if(ball_bottom >= window.innerHeight){
			style(ball, "", "top", "5%");
		}
		if(ball_left.toFixed(0) <= pinball.offsetLeft + 10){
			style(ball, "", "left", "15px");
			ball_speedX = (-1 * ball_speedX);
		}
		if(ball_right.toFixed(0) >= pinball.offsetLeft + pinball.offsetWidth - 10){
			ball_speedX = (-1 * ball_speedX);
		}
		style(ball, "", "top", ball.offsetTop + ball_speedY + "px", "left", ball.offsetLeft + ball_speedX + "px");
	}, 1);
}
load(ball_move);