function openWindow(){
	let pl = g("#play");
	pl.onclick = ()=>{
		let wn = window.open("index.html", 'width=300', 'height=600');
	}
}
load(openWindow);