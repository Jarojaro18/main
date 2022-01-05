let speed = 0;
let square;
let wh;
function square_move(){
	square = g("#square");
	wh = window.innerHeight;
	let si = setInterval(()=>{
		speed += 0.2;
		style(square, "", "top", square.offsetTop + speed + "px", "transform", "rotateZ("+speed*3+"deg)");
		if(speed >= 8){
			speed = 8;
		}
		if(square.offsetTop <= 0){
			style(square, "", "top", "0px");
			style(square, "", "top", square.offsetTop + speed + "px", "transform", "rotateZ("+speed*3+"deg)");
			
		}
		if(square.offsetTop > wh - square.offsetHeight){
			style(square, "", "top", (wh - square.offsetHeight) + "px", "transform", "rotateZ("+speed*3+"deg)");
			speed = 0;
		}
	},10);
}
load(square_move);

function space(event){
	let key = event.keyCode;
	if(key == 32){
		speed = -7;
		style(square, "", "top", square.offsetTop + speed + "px", "transform", "rotateZ("+speed*3+"deg)");
		if(speed <= -15){
			speed = (-15);
		}
		if(square.offsetTop <= 0){
			speed = 0;
			style(square, "", "top", "0px", "transform", "rotateZ("+speed*3+"deg)");
			style(square, "", "top", square.offsetTop + speed + "px", "transform", "rotateZ("+speed*3+"deg)");
			
		}
		
	}
}
window.addEventListener("keyup", space);

let random_height;
let second_elem_height;
function make_obstacles(){
	let body = g("body");
	let si2 = setInterval(()=>{
		random_height = rand(5, 75);
		second_elem_height = (100 - random_height - 25);
		let el_h = new_element("div", body[0], "", ["obstacle", "high_elem"], ["height", random_height + "vh"], []);
		let el_l = new_element("div", body[0], "", ["obstacle", "low_elem"], ["height", second_elem_height + "vh"], []);
	}, 2000);
}
load(make_obstacles);
let points = 0;
function remove_obstacles(){
	let obstacles = g(".obstacle");
	let res = g("#results");
	let si3 = setInterval(()=>{
		for(let i = 0; i < obstacles.length; i++){
			let ob_bcr = obstacles[i].getBoundingClientRect();
			let ob_left = ob_bcr.left;
			if(ob_left < 50){
				obstacles[i].remove();
				points += 1;
				res.innerHTML = points;
			}
		}
	}, 100);
}
load(remove_obstacles);

function obstacle_collission(){
	let h_e = g(".high_elem");
	let l_e = g(".low_elem");
	let si4 = setInterval(()=>{
		let sqr_bcr = square.getBoundingClientRect();
		let sqr_top = sqr_bcr.top;
		let sqr_bottom = sqr_bcr.bottom;
		let sqr_right = sqr_bcr.right;
		let sqr_left = sqr_bcr.left;
		for(let i = 0; i < h_e.length; i++){
			let he_bcr = h_e[i].getBoundingClientRect();
			let he_top = he_bcr.top;
			let he_bottom = he_bcr.bottom;
			let he_right = he_bcr.right;
			let he_left = he_bcr.left;
			if(sqr_top < he_bottom && sqr_right > he_left && sqr_right < he_right){
				alert("Przegrałeś");
				location.reload();
			}
			let le_bcr = l_e[i].getBoundingClientRect();
			let le_top = le_bcr.top;
			let le_bottom = le_bcr.bottom;
			let le_right = le_bcr.right;
			let le_left = le_bcr.left;
			if(sqr_bottom > le_top && sqr_right > le_left && sqr_right < le_right){
				alert("Przegrałeś");
				location.reload();
			}
		}
	},50);
}
load(obstacle_collission);