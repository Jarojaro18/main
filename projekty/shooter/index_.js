let rd_bcr;
let rd_x_center;
let rd_y_center;
let stopnie;
let si;
let speed_x = 0;
let speed_y = 0;
let deg_x;
let deg_y;
let top2;
let left2;

let actual_hp;
let max_hp;
let shield;
let damage;
let healing;
let actual_hp_box;
let max_hp_box;
let shield_box;
let damage_box;
let healing_box;
let enemy_dmg = 10;
let kill_count = 0;
let res;
function mouse_degree(ship){
    let sh = ship;
	let rotate_obj = g("#ship");
	let deg_sign = g("#deg_ball");

	res = g("#res");

	actual_hp_box = g(".actual_hp");
	max_hp_box = g(".max_hp");
	shield_box = g(".shield_data");
	damage_box = g(".damage_data");
	healing_box = g(".heal_data");
	
	actual_hp_box[0].innerText = sh.hp;
	max_hp_box[0].innerText = sh.hp;
	shield_box[0].innerText = sh.shield;
	damage_box[0].innerText = sh.damage;
	healing_box[0].innerText = (sh.healing * 100) + "%";
	
	actual_hp = sh.hp;
	max_hp = sh.hp;
	damage = sh.damage;
	healing = sh.healing;
	shield = sh.shield;

	rd_bcr = rotate_obj.getBoundingClientRect();
	rd_x_center = rd_bcr.left + rd_bcr.width/2;
	rd_y_center = rd_bcr.top + rd_bcr.height/2;
	
	window.onmousemove = (event)=>{
		let client_x = event.clientX;
		let client_y = event.clientY;
		let one = parseFloat(client_x - rd_x_center);
		let two = parseFloat(client_y - rd_y_center);
		
		
		let deg_bcr = deg_sign.getBoundingClientRect();
		deg_x = deg_bcr.left + deg_bcr.width/2;
		deg_y= deg_bcr.top + deg_bcr.height/2;
		
		
		
		
		let a_tan = Math.atan2(two, one);
		let pi = Math.PI;
		stopnie = a_tan * (180/pi);
		style(rotate_obj, "", "transform-origin", "50% 50%", "transform", "rotateZ("+ stopnie +"deg)");
		/*if(rd_y_center < rotate_obj.offsetHeight/2){
			speed_y = (-0.5 * speed_y);
			style(rotate_obj, "", "left", rotate_obj.offsetLeft + "px", "top", "10px", "transform", "rotateZ("+stopnie+"deg)");
		}
		if(rd_y_center >= window.innerHeight - rotate_obj.offsetHeight/2){
			speed_y = (-0.5 * speed_y);
			style(rotate_obj, "", "left", rotate_obj.offsetLeft + "px", "top", window.innerHeight - (rotate_obj.offsetHeight + 20) + "px", "transform", "rotateZ("+stopnie+"deg)");
		}
		if(rd_x_center < rotate_obj.offsetWidth){
			speed_x = (-0.5 * speed_x);
			style(rotate_obj, "", "left", rotate_obj.offsetLeft + 20 + "px", "top", rotate_obj.offsetTop + "px", "transform", "rotateZ("+stopnie+"deg)");
		}
		if(rd_x_center > window.innerWidth - rotate_obj.offsetWidth/2){
			speed_x = (-0.5 * speed_x);
			style(rotate_obj, "", "left", window.innerWidth - (rotate_obj.offsetWidth + 20) + "px", "top", rotate_obj.offsetTop + "px", "transform", "rotateZ("+stopnie+"deg)");
		}*/
		if(rd_y_center < rd_bcr.height/2){
			speed_y = (-0.5 * speed_y);
			style(rotate_obj, "", "left", rd_bcr.left + "px", "top", rd_bcr.height/2 + "px", "transform", "rotateZ("+stopnie+"deg)");
		}
		if(rd_y_center >= window.innerHeight - rd_bcr.height/2){
			speed_y = (-0.5 * speed_y);
			style(rotate_obj, "", "left", rd_bcr.left + "px", "top", window.innerHeight - rd_bcr.height + "px", "transform", "rotateZ("+stopnie+"deg)");
		}
		if(rd_x_center < rd_bcr.width/2){
			speed_x = (-0.5 * speed_x);
			style(rotate_obj, "", "left", rd_bcr.width/2 + "px", "top", rd_bcr.top + "px", "transform", "rotateZ("+stopnie+"deg)");
		}
		if(rd_x_center > window.innerWidth - rd_bcr.width/2){
			speed_x = (-0.5 * speed_x);
			style(rotate_obj, "", "left", window.innerWidth - rd_bcr.width + "px", "top", rd_bcr.top + "px", "transform", "rotateZ("+stopnie+"deg)");
		}
		let bullet_pos_left = deg_bcr.left;
		let bullet_pos_top = deg_bcr.top;
		top2 = ((bullet_pos_top + deg_bcr.height/2) - rd_y_center)/20;
		left2 = ((bullet_pos_left + deg_bcr.width/2) - rd_x_center)/20;
        
	}
	window.onkeydown = (event)=>{
		rd_bcr = rotate_obj.getBoundingClientRect();
		rd_x_center = rd_bcr.left + rd_bcr.width/2;
		rd_y_center = rd_bcr.top + rd_bcr.height/2;
		let bl = g(".bullet");
        
		let deg_bcr = deg_sign.getBoundingClientRect();
		deg_x = deg_bcr.left + deg_bcr.width/2;
		deg_y= deg_bcr.top + deg_bcr.height/2;
		
		if(event.keyCode == "38"){
			speed_x += (deg_x - rd_x_center)/sh.speed_x;
			speed_y += (deg_y - rd_y_center)/sh.speed_y;
			style(rotate_obj, "", "left", rotate_obj.offsetLeft + speed_x + "px", "top", rotate_obj.offsetTop + speed_y + "px", "transform", "rotateZ("+ stopnie +"deg)");
			/*if(rd_y_center < rotate_obj.offsetHeight/2){
				speed_y = (-0.5 * speed_y);
				style(rotate_obj, "", "left", rotate_obj.offsetLeft + "px", "top", "10px", "transform", "rotateZ("+stopnie+"deg)");
			}
			if(rd_y_center >= window.innerHeight - rotate_obj.offsetHeight/2){
				speed_y = (-0.5 * speed_y);
				style(rotate_obj, "", "left", rotate_obj.offsetLeft + "px", "top", window.innerHeight - (rotate_obj.offsetHeight + 20) + "px", "transform", "rotateZ("+stopnie+"deg)");
			}
			if(rd_x_center < rotate_obj.offsetWidth){
				speed_x = (-0.5 * speed_x);
				style(rotate_obj, "", "left", rotate_obj.offsetLeft + 20 + "px", "top", rotate_obj.offsetTop + "px", "transform", "rotateZ("+stopnie+"deg)");
			}
			if(rd_x_center > window.innerWidth - rotate_obj.offsetWidth/2){
				speed_x = (-0.5 * speed_x);
				style(rotate_obj, "", "left", window.innerWidth - (rotate_obj.offsetWidth + 20) + "px", "top", rotate_obj.offsetTop + "px", "transform", "rotateZ("+stopnie+"deg)");
			}
			*/
			
			if(rd_y_center < rd_bcr.height/2){
				speed_y = (-0.5 * speed_y);
				style(rotate_obj, "", "left", rd_bcr.left + "px", "top", rd_bcr.height/2 + "px", "transform", "rotateZ("+stopnie+"deg)");
			}
			if(rd_y_center >= window.innerHeight - rd_bcr.height/2){
				speed_y = (-0.5 * speed_y);
				style(rotate_obj, "", "left", rd_bcr.left + "px", "top", window.innerHeight - rd_bcr.height + "px", "transform", "rotateZ("+stopnie+"deg)");
			}
			if(rd_x_center < rd_bcr.width/2){
				speed_x = (-0.5 * speed_x);
				style(rotate_obj, "", "left", rd_bcr.width/2 + "px", "top", rd_bcr.top + "px", "transform", "rotateZ("+stopnie+"deg)");
			}
			if(rd_x_center > window.innerWidth - rd_bcr.width/2){
				speed_x = (-0.5 * speed_x);
				style(rotate_obj, "", "left", window.innerWidth - rd_bcr.width + "px", "top", rd_bcr.top + "px", "transform", "rotateZ("+stopnie+"deg)");
			}
		}
		
	}
	window.onkeyup = ()=>{
		speed_y = 0;
		speed_x = 0;
	}
	window.onclick = (event)=>{
		cl_Int(si);
		let client_x = event.clientX;
		let client_y = event.clientY;
		let bullet = g(".bullet");
		let body = g("#gameboard");
		
		let e_layer = g(".enemy_layer");
		
		rd_bcr = rotate_obj.getBoundingClientRect();
		rd_x_center = rd_bcr.left + rd_bcr.width/2;
		rd_y_center = rd_bcr.top + rd_bcr.height/2;
		
		let el = new_element("div", body, "", ["bullet"], ["left", rd_x_center - 3 + "px", "top", rd_y_center - 3 + "px"], []);
		
		el.dataset.left = left2;
		el.dataset.top = top2;
		let enemy = g(".enemy");
		si = setInterval(()=>{
			for(let i = 0; i < bullet.length; i++){
				let bl_bcr = bullet[i].getBoundingClientRect();
				style(bullet, i, "top", bl_bcr.top + parseInt(bullet[i].dataset.top) + "px", "left", bl_bcr.left + parseInt(bullet[i].dataset.left) + "px");
				for(let j = 0; j < enemy.length; j++){
					let enemy_bcr = enemy[j].getBoundingClientRect();
					let enemy_x_center = (parseInt(enemy_bcr.left) + parseInt(enemy_bcr.width/2))-4;
					let enemy_y_center = (parseInt(enemy_bcr.top) + parseInt(enemy_bcr.height/2))-4;
					if(Math.abs((bl_bcr.left + bl_bcr.width/2) - enemy_x_center) < enemy[j].offsetWidth/2 && Math.abs((bl_bcr.top + bl_bcr.height/2) - enemy_y_center) < enemy[j].offsetHeight/2){
						bullet[i].remove();
						e_layer[j].innerText -= damage;
						actual_hp += Math.round(damage * healing);
						if(actual_hp >= max_hp){
							actual_hp = max_hp;
						}
						actual_hp_box[0].innerText = actual_hp;
						if(e_layer[j].innerText <= 0){
							enemy[j].remove();
							kill_count += 1;
							res.innerHTML = kill_count;
							
							if(enemy.length <= 0){
								cl_Int(si_enemy_bullet2);
								cl_Int(si_enemy_bullet);
								bonus();
							}
						}
					}
				}
				
				if(bullet[i].offsetLeft < 0 || bullet[i].offsetLeft > window.innerWidth || bullet[i].offsetTop < 0 || bullet[i].offsetTop > window.innerHeight || bullet[i].dataset.left === "undefined"){
					bullet[i].remove();
				}
			}
		}, 10);
	}
}
function bonus(){
	let bonuses = g("#bonuses");
	style(bonuses, "", "display", "flex");
}
function add_bonus(name){
	let stat = name;
	if(name == "hp"){
		max_hp += 20;
		max_hp_box[0].innerText = max_hp;
	}
	if(name == "damage"){
		damage += 5;
		damage_box[0].innerText = damage;
	}
	if(name == "heal"){
		healing += 0.05;
		healing_box[0].innerText = healing;
		res.innerText = healing;
	}
	
	let bonuses = g("#bonuses");
	style(bonuses, "", "display", "none");
	
	actual_hp_box[0].innerText = actual_hp;
	max_hp_box[0].innerText = max_hp;
	shield_box[0].innerText = 100;
	damage_box[0].innerText = damage;
	healing_box[0].innerText = (healing * 100).toFixed(2) + "%";
	enemy_dmg += 2;
	shield = 100;
	change_level();
}
function change_level(){
	
	level += 1;
	enemy_make_and_move();
}