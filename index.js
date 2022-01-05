let click_num = 0;
let polygons;
function button_move(){
	polygons = g(".polygons");
	polygons[0].onclick = ()=>{
		if(click_num == 1) {
			style(polygons, 0, "animation", "none");
			style(polygons, 0, "animation", "move_up 1s forwards");
			show_menu("up");
			setTimeout(()=>{
				style(polygons, 0, "top", "0px", "transform", "rotateZ(0deg)");
				click_num = 0;
			}, 1000);
		}
		if(click_num == 0){
			style(polygons, 0, "animation", "none");
			style(polygons, 0, "animation", "move_down 1s forwards");
			show_menu("down");
			setTimeout(()=>{
				style(polygons, 0, "top", "calc(100% - 80px)", "transform", "rotateZ(180deg)");
				click_num = 1;
			}, 1000);
		}
		
	}
}
load(button_move);


