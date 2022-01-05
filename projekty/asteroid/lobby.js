function make_stars(){
	let body = g("body");
	let num_of_stars = 40;
	for(let i = 0; i < num_of_stars; i++){
		let rnd_left = rand(1,99);
		let rnd_top = rand(1,99);
		
		let star = new_element("div", body[0], "", ["star"], ["left", rnd_left + "%", "top", rnd_top + "%"], []);
	}
}
load(make_stars);

function show_gameboard(){
	let gbc = g("#gameboard_container");
	let m = g("#main");
	style(gbc, "", "display", "block");
	style(m, "", "display", "none");
	setName();
	makeEnemy();
	score();
	enemyGunFire();
}