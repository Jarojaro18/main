let ship;

function shipMove(event){
	let shipCoord = ship.getBoundingClientRect();
	let shipLeftCoord = shipCoord.left;
	let shipRightCoord = shipCoord.right;
	let ww = window.innerWidth;
	let kc = event.keyCode;
	
	if(kc == 39){
		style(ship, "", "left", (shipLeftCoord += 10) + "px", "transform", "rotateY(-5deg)");
	}
	if(kc == 37){
		style(ship, "", "left", (shipLeftCoord -= 10) + "px", "transform", "rotateY(5deg)");
	}
	if(shipLeftCoord <= 10){
		style(ship, "", "left", "10px");
	}
	if(shipLeftCoord >= (ww - 50)){
		style(ship, "", "left", (ww-50)+"px");
	}
}
window.addEventListener("keydown", shipMove);
function shipMove2(event){
	let kc = event.keyCode;
	
	if(kc == 39){
		style(ship, "", "transform", "rotateY(0deg)");
	}
	if(kc == 37){
		style(ship, "", "transform", "rotateY(-0deg)");
	}
}
window.addEventListener("keyup", shipMove2);

let gunWidth = 8;
let gunHeight = 10;
let gunLeftCoord;
let gm;
function gunFire(){
	
	ship = g("#ship");
	gm = g("#game_board");
	let gun = g(".gun");
	
		let gunCoord = gun[0].getBoundingClientRect();
		gunLeftCoord = gunCoord.left;
		let gunTopCoord = gunCoord.top;

		let el = new_element("div", gm, "", ["bullet"], ["position", "absolute", "width", gunWidth + "px", "height", gunHeight + "px", "left", gunLeftCoord + "px", "top", gunTopCoord + "px", "background-color", "blue"], []);
		bulletMove();
}
load(gunFire);





let sint2;
let enemyShip;
let bl;
let num_of_enemy = 20;
function bulletMove(){
	bl = g(".bullet");
	let wh1 = window.innerHeight/80;
	enemyShip = g(".enemyShip");
	sint2 = setInterval(()=>{
		
		let bulletCoord = bl[0].getBoundingClientRect();
		let bl_top = bulletCoord.top;
		let bl_left = bulletCoord.left;
		let bl_right = bulletCoord.left + bl[0].offsetWidth;
		style(bl, 0, "top", (bl_top - wh1) + "px");
		if(bl_top < 0){
			bl[0].remove();
			cl_Int(sint2);
			gunFire();
		}
		for(let i = 0; i < enemyShip.length; i++){
			let es_brc = enemyShip[i].getBoundingClientRect();
			let es_top = es_brc.top;
			let es_bottom = es_top + enemyShip[i].offsetHeight;
			
			let es_left = es_brc.left;
			let es_right = es_left + enemyShip[i].offsetWidth;
			if(bl_top >= es_top && bl_top <= es_bottom && bl_left >= es_left && bl_right <= es_right && enemyShip[i].classList.contains("visible") == true){
				cl_Int(sint2);
				remClass(enemyShip[i], "visible");
				pts += 100;
				points[0].innerHTML = "PUNKTY: " +  pts;
				bl[0].remove();
				num_of_enemy -= 1;
				gunFire();
				if(num_of_enemy <= 0){
					num_of_enemy = 20;
					lvl_num += 1;
					level[0].innerHTML = "POZIOM: " + lvl_num;
					let e_ship = g(".enemyShip");
					addClassToElements(e_ship, "visible");
					board_speed += 1;
				}
			}
		}
		
		
	},10);
}
