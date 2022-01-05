{
let sqr;
let count = 0;
let tb;
function squareSize(){
	let ww = window.innerWidth;
    let wh = window.innerHeight;
    sqr = g(".squareContainer");
    if(ww >= wh){
		style(sqr, 0, "width", "50vh", "height", "50vh");
    }
    else {
    	style(sqr, 0, "width", "65vw", "height", "65vw");
    }
}
load(squareSize);
resize(squareSize);
function outMenu(){
	style(sqr, 0, "box-shadow", "0px 0px 0px white");
}
function startBtnClick(){
    let el = g(".startBtn");
	let bl = g(".blur");
    let mc = g(".menuContainer");
    tb = g(".titleBtn");
    el[0].addEventListener("click", ()=>{
    	if(count == 0){
			style(bl, 0, "animation", "none", "animation", "filterIn 0.8s forwards");
			style(mc, 0, "display", "flex");
            count = 1;
			style(el, 0, "top", "50%", "transform", "translate(-50%, -50%)");
            setTimeout(menuAnimations(), 1000);
			style(tb, 0, "display", "flex");
        }
        else if(count == 1){
			style(bl, 0, "animation", "none", "animation", "filterOut 0.8s forwards");
			style(mc, 0, "display", "none");
            count = 0;
			style(el, 0, "top", "10px", "transform", "translate(-50%, 0%)");
			style(sqr, 0, "animation", "none", "box-shadow", "0px 0px 0px white, 0px 0px 0px white");
			style(tb, 0, "display", "none");
        }
    });
}
load(startBtnClick);
function menuAnimations(){
    let directions = {
    	left : '-6px 6px 5px white, -6px 6px 5px white',
        bottom : '6px 6px 5px white, 6px 6px 5px white',
        top : '-6px -6px 5px white, -6px -6px 5px white',
        right : '6px -6px 5px white, 6px -6px 5px white',
        zero : '0px 0px -1px white'
    };
    let mb = g(".menuBtn");
    for(let i = 0; i < mb.length; i++){
    	let dr = mb[i].dataset.direction;
        let title = mb[i].dataset.title;
    	mb[i].addEventListener("mouseenter", ()=>{
			style(sqr, 0, "animation", "none");
			setProperty(sqr[0], "--in", directions.zero,"--out", directions[dr]);
			style(sqr, 0, "animation", "menuAnimIn 0.5s forwards");
            tb[0].innerText = title;
			style(tb, 0, "padding", "10px 20px"); 
        });
        mb[i].addEventListener("mouseleave", ()=>{
        	style(sqr, 0, "animation", "none");
			setProperty(sqr[0], "--in", directions[dr],"--out", directions.zero);
            style(sqr, 0, "animation", "menuAnimOut 0.5s forwards");
            tb[0].innerText = "";
            style(tb, 0, "padding", "0px"); 
        });
    }
}
}