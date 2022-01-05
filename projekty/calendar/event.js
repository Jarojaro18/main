


		
let bd;
let ev_txt;
let dl;
let events;


let ev = `<div class="event_container">
			<span class="delete" onclick="delete_cookie()">X</span>
			<div class="date">2021-Marzec-3</div>
			<div class="time">07:45 - 10:30</div>
			<div class="event_description">Lorem ipsum – tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, 
				wzorowany na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji krojów pisma, 
				kompozycji kolumny itp
			</div>
		</div>`;

function set_let(){
	bd = g("body");
	events = g(."events");
	del = g(".delete");
}  		
load(set_let);
function setStorage(){
	
	events[0].innerHTML = "";
	
	getStorage();
	
	if(ev_txt == "" || ev_txt == null){
		localStorage.setItem("event3", ev);
	}
	else {
		ev_txt += ev;
		localStorage.setItem("event3", ev_txt);
	}
	getStorage();
	showStorage();
	delete_cookie();
}
function getStorage(){
	ev_txt = localStorage.getItem("event3");
}

function showStorage(){
	events[0].innerHTML += ev_txt;
}

//localStorage.setItem("space_invaders", arrStr);

function delete_cookie(){
	for(let i = 0; i < del.length; i++){
		del[i].onclick = ()=>{
			del[i].parentNode.remove();
			let update_cookie = events[0].innerHTML;
			localStorage.setItem("event3", update_cookie);
			getStorage();
			events[0].innerHTML = ev_txt;
			delete_cookie();
		}
	}
}
function load_cookie(){
	getStorage();
	showStorage();
	delete_cookie();
}
load(load_cookie);