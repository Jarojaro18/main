let cc;
let col;
let randW;
let wd;
function columnsCont(){
	let winh = window.innerHeight;
    let winw = window.innerWidth;
    cc = g("#columnsContainer");
    if(winh >= winw){
    	style(cc, "", "width", "75vw", "height", "75vw");
    }
    else{
    	style(cc, "", "width", "75vh", "height", "75vh");
    }
}
load(columnsCont);
resize(columnsCont);


function columns(){
    for(let i = 0; i < 20; i++){
    	randW = Math.floor( Math.random() * ( 25 - 0 + 1 ) + 0 );
		let el = new_element("div", cc, "", ["column"], ["width", randW + "%", "height", (cc.offsetHeight / 20) - 5 + "px"], []);
    }    
}
load(columns);

function sizes(){
	col = g(".column");
	style(col, "*", "height", (cc.offsetHeight / 20) - 5 + "px");
}
load(sizes);
resize(sizes);


function soundMove(){
      for(let i = 0; i < col.length; i++){
        setInterval(()=>{
			style(col, i, "animation", null);
            wd = col[i].offsetWidth;
			randW = Math.floor( Math.random() * ( 25 - 0 + 1 ) + 0 );
			setProperty(col[i], "--widthPrev", wd + "px", "--widthNext", randW +"%");
			style(col, i, "animation", "sounds 0.5s forwards", "animationIterationCount", 1, "width", randW + "%");
        },500);
      }
}
load(soundMove);