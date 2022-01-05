function bp_bg(){
	let mi = g("#main_image");
	let wh = window.innerHeight;
	let ww = window.innerWidth;
	if(wh >= ww){
		style(mi, "", "background-size", "100% auto");
	}
	else {
		style(mi, "", "background-size", "auto 100%");
	}
}
load(bp_bg);
resize(bp_bg);
let cl = 0;
let ml;
function menu_loader(){
	ml = g(".menu_loader");
	let m_container = g("#menu_container");
	ml[0].onclick = ()=>{	
		if(m_container.offsetLeft !== 0){
			setProperty(ml[0], "--m_width", (m_container.offsetWidth/2 - ml[0].offsetWidth/2) + "px");
			style(m_container, "", "animation", "menu_in 1s forwards");
			style(ml, 0, "animation", "menu_l_in 1.2s forwards");
		}
		else {
			style(m_container, "", "animation", "menu_out 1s forwards");
			style(ml, 0, "animation", "menu_l_out 1.2s forwards");
		}
	}
	
}
load(menu_loader);
resize(menu_loader);