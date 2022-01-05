let level = 1;
let ship_n;
let si_enemy_bullet;
let si_enemy_bullet2;
function new_game(ship_name){
	ship_n = ship_name;
	let front = g("#front");
	style(front, "", "display", "none");
	let bd = g("#gameboard");
	style(bd, "", "display", "block");
	bd.innerHTML += ship_name.build;
    mouse_degree(ship_name);
	enemy_make_and_move();
}

function enemy_make_and_move(){
	let body = g("#gameboard");
	
	for(let i = 0; i < level; i++){
		let el = new_element("div", body, "", ["enemy"], [], []);
        let el2 = new_element("div", el, "", ["enemy_layer"], [], []);
		let rand_left_0 = rand(5, 95);
		let rand_top_0 = rand(5, 95);
		
		let rand_left_1 = rand(5, 95);
		let rand_top_1 = rand(5, 95);
		
		let rand_left_2 = rand(5, 95);
		let rand_top_2 = rand(5, 95);
		
		let rand_left_3 = rand(5, 95);
		let rand_top_3 = rand(5, 95);
		
		let rand_left_4 = rand(5, 95);
		let rand_top_4 = rand(5, 95);
		
		setProperty(el, "--left_0", rand_left_0 + "%", "--top_0", rand_top_0 + "%", "--left_1", rand_left_1 + "%", "--top_1", rand_top_1 + "%", "--left_2", rand_left_2 + "%", "--top_2", rand_top_2 + "%", "--left_3", rand_left_3 + "%", "--top_3", rand_top_3 + "%", "--left_4", rand_left_4 + "%", "--top_4", rand_top_4 + "%");
		style(el, "", "animation", "enemy_move 10s infinite");
		el2.innerText = 50 + (10 * level);
	}
	enemy_bullet();
}


let ship_x_center;
let enemy_y_center;
function enemy_bullet(){
	let enemy = g(".enemy");
	let ship = g("#ship");
	let body = g("#gameboard");
	
	si_enemy_bullet = setInterval(()=>{
		let ship_bcr = ship.getBoundingClientRect();
		let ship_x_center = ship_bcr.left + ship_bcr.width/2;
		let ship_y_center = ship_bcr.top + ship_bcr.height/2;
		for(let i = 0; i < enemy.length; i++){
			let enemy_bcr = enemy[i].getBoundingClientRect();
			let enemy_x_center = (parseInt(enemy_bcr.left) + parseInt(enemy_bcr.width/2))-4;
			let enemy_y_center = (parseInt(enemy_bcr.top) + parseInt(enemy_bcr.height/2))-4;
			
			let el = new_element("div", body, "", ["enemy_bullet"], ["left", parseInt(enemy_x_center) + "px", "top", parseInt(enemy_y_center) + "px"], []);
			let el_bcr = el.getBoundingClientRect();
			let el_left = el_bcr.left;
			let el_top = el_bcr.top;
			
			let bullet_left_move = rand(parseInt(ship_x_center - el_left), parseInt(ship_x_center - el_left));
			let bullet_top_move = rand(parseInt(ship_y_center - el_top), parseInt(ship_y_center - el_top));
			
			//el.dataset.left = parseInt(bullet_left_move)/100;
            
            el.dataset.left = Math.round(parseInt(bullet_left_move)/50);
			el.dataset.top = Math.round(parseInt(bullet_top_move)/50);
            
			
		}
		
	}, 2000);
	bullet_move();
}

function bullet_move(){
	let ship = g("#ship");
	let ship_bcr = ship.getBoundingClientRect();
	let enemy_bullet = g(".enemy_bullet");
	si_enemy_bullet2 = setInterval(()=>{
		let ship_bcr = ship.getBoundingClientRect();
		let ship_x_center = ship_bcr.left + ship_bcr.width/2;
		let ship_y_center = ship_bcr.top + ship_bcr.height/2;
		
		for(let i = 0; i < enemy_bullet.length; i++){
			let bl_bcr = enemy_bullet[i].getBoundingClientRect();
			let eb_x_center = bl_bcr.left + bl_bcr.width/2;
			let eb_y_center = bl_bcr.top + bl_bcr.height/2;
            if(enemy_bullet[i].dataset.top == 0){
                enemy_bullet[i].dataset.top = 1;
            }
            if(enemy_bullet[i].dataset.left == 0){
                enemy_bullet[i].dataset.left = 1;
            }
			style(enemy_bullet, i, "top", enemy_bullet[i].offsetTop + parseInt(enemy_bullet[i].dataset.top) + "px", "left", enemy_bullet[i].offsetLeft + parseInt(enemy_bullet[i].dataset.left) + "px");
			if(enemy_bullet[i].offsetLeft < 0 || enemy_bullet[i].offsetLeft > window.innerWidth || enemy_bullet[i].offsetTop < 0 || enemy_bullet[i].offsetTop > window.innerHeight){
				enemy_bullet[i].remove();
			}
			if(Math.abs(eb_x_center - ship_x_center) < ship_bcr.width/2 && Math.abs(eb_y_center - ship_y_center) < ship_bcr.height/2){
				enemy_bullet[i].remove();
				if(shield > 0){
					shield -= enemy_dmg;
					shield_box[0].innerText = shield;
				}
				if(shield <= 0){
					shield = 0;
					shield_box[0].innerText = shield;
					actual_hp -= enemy_dmg;
					actual_hp_box[0].innerText = actual_hp;
					if(actual_hp <= 0){
						alert("KOSMICI CIĘ POKONALI");
						for(let i = 0; i < kill_count_arr.length; i++){
							if(kill_count >= kill_count_arr[i] && kill_array[i] == "no"){
								kill_array[i] = "yes";
							}
						}
						for(let i = 0; i < hp_count_arr.length; i++){
							if(max_hp >= hp_count_arr[i] && hp_array[i] == "no"){
								hp_array[i] = "yes";
							}
						}
						for(let i = 0; i < heal_count_arr.length; i++){
							if(healing >= heal_count_arr[i] && heal_array[i] == "no"){
								heal_array[i] = "yes";
							}
						}
						for(let i = 0; i < damage_count_arr.length; i++){
							if(damage >= damage_count_arr[i] && damage_array[i] == "no"){
								damage_array[i] = "yes";
							}
						}
						setStorage();
						location.reload();
					}
				}
			}
		}
	}, 10);
}