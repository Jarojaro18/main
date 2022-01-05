function alien_ship(event){
	let c_x = event.clientX;
	let c_y = event.clientY;
	
	let a_ship = g("#alien_ship");
	style(a_ship, "", "left", (c_x - a_ship.offsetWidth/2) + "px", "top", (c_y - a_ship.offsetHeight - 80) + "px");
}
msmove(alien_ship);


function red_light(){
	let menu = g(".menu");
	let ray = g(".light_ray");
	for(let i = 0; i < menu.length; i++){
		menu[i].onmouseenter = ()=>{
			style(ray, 0, "background", "linear-gradient(to bottom right, red 0%, rgba(0,0,0,0) 50%)");
		}
		menu[i].onmouseleave = ()=>{
			style(ray, 0, "background", "linear-gradient(to bottom right, red 0%, rgba(0,0,0,0) 0%)");
		}
	}
}
load(red_light);

function close_it(name){
	let div_name = g("." + name);
	style(div_name, 0, "display", "none");
}
function open_it(name){
	let div_name = g("." + name);
	style(div_name, 0, "display", "flex");
}
