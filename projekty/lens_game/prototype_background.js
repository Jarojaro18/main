function set_background(){
	let box = g(".box");
	let bg_name = ["game", "movie", "town"];
	let bg_anim = ["hue", "sepia", "grayscale", "invert", "saturate"];
	for(let i = 0; i < box.length; i++){
		let random_name = rand(0, bg_name.length - 1);
		let rand_animation = rand(0, bg_anim.length - 1);
		let random_num = rand(1, 14);
		let name = bg_name[random_name] + random_num; 
		style(box, i, "background-image", "url(images/question_bgs/"+name+".jpg)");
	}
}
load(set_background);