let ec;

let lvl = 1;
let pts = 0;
let lf = 3;
let points;
let lives;
let level;
let lvl_num = 0;
let nick;
function setName(){
	nick = prompt("Please enter your name");
	if(nick == null){
		setName();
	}
	if(nick.length > 10){
		alert("Za długa nazwa!");
		setName();
	}
	if(nick.length <= 3){
		alert("Za krótka nazwa!");
		setName();
	}
	
}


function makeEnemy(){
	ec = g("#enemyContainer");
	for(let i = 0; i < 20; i++){
		let elem = new_element("div", ec, "", ["enemyShip", "visible"], [], []);
		let elem2 = new_element("div", elem, "", ["cockpit"], [], []);
	}
	boardMoveLeft();
}



function score(){
	
	points = g(".points");
	lives = g(".lives");
	level = g(".lvl");
	level[0].innerHTML = "POZIOM: " + lvl_num;
	points[0].innerHTML = "PUNKTY: " +  pts;
	lives[0].innerHTML = "ŻYCIA: " + lf;
}

let board_speed = 5;

function boardMoveLeft(){
	let em = setInterval(()=>{
		let ec_bcr = ec.getBoundingClientRect();
		let ec_left = ec_bcr.left;
		let ec_right = ec_bcr.right;
		style(ec, "", "left", (ec_left -= board_speed) + "px");
		if(ec_left <= 30){
			cl_Int(em);
			boardMoveRight();
		}
	},20);
}

function boardMoveRight(){
	let ec_width = ec.offsetWidth;
	let win_width = window.innerWidth;
	let em = setInterval(()=>{
		let ec_bcr = ec.getBoundingClientRect();
		
		let ec_left = ec_bcr.left;
		let ec_right = ec_bcr.right;
		style(ec, "", "left", (ec_left += board_speed) + "px");
		if(ec_left + ec_width >= win_width - 30){
			cl_Int(em);
			boardMoveLeft();
		}
	},20);
}

let en_bl;
let enemyGunWidth = 8;
let enemyGunHeight = 10;
let enemyGunLeftCoord;
let e_ship;
function enemyGunFire(){
		e_ship = g(".visible");
		let random_enemy = rand(0, e_ship.length -1);
		let enemyGunCoord = e_ship[random_enemy].getBoundingClientRect();
		enemyGunLeftCoord = enemyGunCoord.left + ((e_ship[random_enemy].offsetWidth / 2) - 4);
		let enemyGunTopCoord = enemyGunCoord.bottom - enemyGunHeight;
		
		let el = new_element("div", gm, "", ["enemy_bullet"], ["position", "absolute", "width", enemyGunWidth + "px", "height", enemyGunHeight + "px", "left", enemyGunLeftCoord + "px", "top", enemyGunTopCoord + "px", "background-color", "red"], []);
		
		en_bl = g(".enemy_bullet");
		
		setProperty(en_bl[0], "--left_position_enemy_bullet", enemyGunLeftCoord + "px", "--top_position_enemy_bullet", enemyGunTopCoord + "px");
		enemyBulletMove();
}



let sint3;

function enemyBulletMove(){
	
	let wh1 = window.innerHeight/50;
	style(en_bl, 0, "animation", "enemy_bullet 1s forwards");
	sint3 = setInterval(()=>{
		
		let enemyBulletCoord = en_bl[0].getBoundingClientRect();
		let en_bl_top = enemyBulletCoord.top;
		let en_bl_left = enemyBulletCoord.left;
		let en_bl_right = enemyBulletCoord.left + en_bl[0].offsetWidth;
		if(en_bl_top > window.innerHeight - 40){
			cl_Int(sint3);
			enemyBulletRemove();
			enemyGunFire();
		}
		let ship_brc = ship.getBoundingClientRect();
		let ship_top = ship_brc.top;
		let ship_bottom = ship_top + ship.offsetHeight;
		
		let ship_left = ship_brc.left;
		let ship_right = ship_left + ship.offsetWidth;
		if((en_bl_top + 10) >= ship_top && en_bl_top <= ship_bottom && en_bl_left >= ship_left && en_bl_right <= ship_right){
			enemyBulletRemove();
			lf -= 1;
			lives[0].innerHTML = "ŻYCIA: " + lf;
			enemyGunFire();
			if(lf < 0){
				alert("PRZEGRAŁEŚ");
				arr.push({name: nick, score: pts});
				setStorage();
				location.reload();
			}
		}
		
		
	},10);
}

function enemyBulletRemove(){
	en_bl[0].remove();
	cl_Int(sint3);
}