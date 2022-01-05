let kill_array = ["no", "no", "no", "no", "no"];
let kill_count_arr = [1, 10, 25, 50, 100];

let hp_array = ["no", "no", "no", "no", "no"];
let hp_count_arr = [400, 500, 600, 750, 1000];

let heal_array = ["no", "no", "no", "no", "no"];
let heal_count_arr = [0.25, 0.5, 0.75, 1, 2];

let damage_array = ["no", "no", "no", "no", "no"];
let damage_count_arr = [50, 75, 100, 150, 200];

function unlocked_kills_achievements(){
	let kill_achievement = g(".kill_achievement");
	let hp_achievement = g(".hp_achievement");
	let heal_achievement = g(".heal_achievement");
	for(let i = 0; i < kill_array.length; i++){
		if(kill_array[i] == "yes"){
			style(kill_achievement, i, "filter", "grayscale(0%)");
		}
	}
	for(let i = 0; i < hp_array.length; i++){
		if(hp_array[i] == "yes"){
			style(hp_achievement, i, "filter", "grayscale(0%)");
		}
	}
	for(let i = 0; i < heal_array.length; i++){
		if(heal_array[i] == "yes"){
			style(heal_achievement, i, "filter", "grayscale(0%)");
		}
	}
	for(let i = 0; i < damage_array.length; i++){
		if(damage_array[i] == "yes"){
			style(damage_achievement, i, "filter", "grayscale(0%)");
		}
	}
}