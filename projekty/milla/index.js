let menuContainer;
let buttonTitle;
function menuHeight(){
	menuContainer = g("#menuContainer");
	buttonTitle = g("#buttonTitle");
	let menuContainerHeight = menuContainer.offsetHeight;
	setProperty(buttonTitle, "--menuHeight", menuContainerHeight + "px");
}
load(menuHeight);
resize(menuHeight);

function showMenu(){
	let menuButton = g(".navButton");
	let blured = g(".blur"); 
	for(let i = 0; i < menuButton.length; i++){
		menuButton[i].onmouseover = ()=>{
			let title = menuButton[i].dataset.bname;
			buttonTitle.innerText = title;
			style(buttonTitle,"", "opacity", "0", "display", "flex", "animation", "menuShow 1s forwards");
		}
		menuButton[i].onmouseout = ()=>{
			buttonTitle.innerText = "";
			style(buttonTitle, "", "display", "none");
		}
	}
}
load(showMenu);


let red = 35;
let green = 12;
let blue = 123;
function setColor(){
	let xy = document.getElementsByTagName("div");
	let siii = setInterval(()=>{
		
		blue += 0.2;
		red += 1;
		for(let i = 0; i < xy.length; i++){
			setProperty(xy[i], "--red", red, "--blue", blue, "--green", green, "--violet", "rgb(var(--red), var(--green), var(--blue))");
		}
		if(red > 70){
			cl_Int(siii);
			setColor2();
		}
	},500);
	
}
function setColor2(){
	let xy = g("div");
	let siii = setInterval(()=>{
		
		blue -= 0.2;
		red -= 1;
		for(let i = 0; i < xy.length; i++){
			setProperty(xy[i], "--red", red, "--blue", blue, "--green", green, "--violet", "rgb(var(--red), var(--green), var(--blue))");
		}
		if(red < 0){
			cl_Int(siii);
			setColor();
		}
	},500);
}
load(setColor);