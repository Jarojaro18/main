let calendar_days_container;
let cd_width = (1/7)*100;
let day_height;
let day;
let day_array = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
let events;
let events_container;
let dl;
let h1;
let h2;
let m1;
let m2;
let event_container;
function make_calendar_days(){
	calendar_days_container = g("#calendar_days_container");
	events = g(".events");
	events_container = g(".events_container");
	del = g(".delete");
	for(let i = 0; i < 42; i++){
		let calendar_day = new_element("div", calendar_days_container, "", ["day"], [], []);
	}
	day_size();
}
load(make_calendar_days);

function day_size(){
	day_height = (calendar_days_container.offsetWidth/200) * cd_width;
	day = g(".day");
	style(day, "*", "width", cd_width + "%", "height", day_height + "px");
}
resize(day_size);


function calendar_day(){
	
	let day_number = new Date(year.innerHTML, month_number, 0).getDay();
	for(let i = day_number; i < (day_number + month_length); i++){
		addClass(day[i], "calendar_day");
		let el = new_element("span", day[i], "", ["day_number"], [], []);
		let ev_num = new_element("div", day[i], "", ["event_num"], [], []);
		el.innerHTML = i + 1 - day_number;
	}
	block_day();
}
load(calendar_day);


function block_day(){
	for(let i = 0; i < day.length; i++){
		if(day[i].classList.contains("calendar_day") == false){
			style(day, i, "pointer-events", "none");
		}
		else {
			style(day, i, "pointer-events", "auto");
		}
	}
}
function reset_calendar(){
	for(let i = 0; i < day.length; i++){
		day[i].innerHTML = "";
	}
	remClassPlus(day, "calendar_day");
}
let day_data_container;
let date;
let date_txt;
let num_of_event;
let single_click = true;
let cookie_name;
let cookie_txt;
let div_array = [];
let a_data;
let a_day;
let a_month;
let a_year;
function day_description(){
	let calendar_d = g(".calendar_day");
	day_data_container = g("#day_data_container");
	date = g("date");
	event_container = g(".event_container");
	a_data = g(".actual_data");
	a_day = g(".actual_day");
	a_month = g(".actual_month");
	a_year = g(".actual_year");
	let day_of_week = g("#day_of_week");
	for(let i = 0; i < calendar_d.length; i++){
		calendar_d[i].onclick = ()=>{
			div_array = [];
			setTimeout(()=>{
				if(single_click == true){
					events[0].innerHTML = "";
					cookie_name = year.innerHTML + "-" + month.innerHTML + "-" + (i+1);
					style(events_container, 0, "display", "block");
					a_day[0].innerHTML = calendar_d[i].getElementsByClassName("day_number")[0].innerText;
					a_month[0].innerHTML = month.innerHTML;
					a_year[0].innerHTML = year.innerHTML;
					style(events_container, 0, "background-image", "url(images/"+month.innerHTML+".jpg)");
					get_cookie();
					for(let i = 0; i < event_container.length; i++){
						let desc = event_container[i].innerHTML;
						let div_array_elem = "<div class='event_container'>" + desc + "</div>";
						div_array.push(div_array_elem);
					}
					div_array.sort();
					events[0].innerHTML = "";
					for(let j = 0; j < div_array.length; j++){
						events[0].innerHTML += div_array[j];
					}
					delete_cookie();
				}
			},1000);
		}
		calendar_d[i].ondblclick = ()=>{
			single_click = false;
			if(single_click == false){
				style(day_data_container, "", "display", "flex");	
				date.innerHTML = year.innerHTML + "-" + month.innerHTML + "-" + (i+1);
				day_of_week.innerHTML = day_array[new Date(year.innerHTML, month_number, i).getDay()];
				cookie_name = year.innerHTML + "-" + month.innerHTML + "-" + (i+1);
				setTimeout(()=>{
					single_click = true;
				},1000);
			}
			
		}
		
	}
}
load(day_description);

function close_day(){
	let close_day = g(".close_day");
	close_day[0].onclick = ()=>{
		style(day_data_container, "", "display", "none");
	}
}
load(close_day);

function set_cookie(){
	let mc = getId("make_cookie");
	ed = g("#event_description").value;
	h1 = g("#hour1").value;
	h2 = g("#hour2").value;
	m1 = g("#min1").value;
	m2 = g("#min2").value;
	let h10;
	let h20;
	let m10;
	let m20;
	
	get_cookie();
	if(h1 > 23 || h2 > 23 || m1 > 59 || m2 > 59){
		alert("Liczba spoza zakresu!");
	}
	else {
		if(h1 < 10){
			h1 = "0" + h1;
		}
		if(h2 < 10){
			h2 = "0" + h2;
		}
		if(m1 < 10){
			m1 = "0" + m1;
		}
		if(m2 < 10){
			m2 = "0" + m2;
		}
		let ds = parseInt(h1 + "" + m1);
		let ev = `<div class="event_container" data-time="`+ds+`">
				<span class="delete" onclick="delete_cookie()">usuń wpis</span>
				<div class="time">`+h1+`:`+m1+`-`+h2+`:`+m2+`</div>
				<div class="event_description">
					`+ed+`
				</div>
			</div>`;
		
		if(cookie_txt == "" || cookie_txt == null){
			localStorage.setItem(cookie_name, ev);
		}
		else {
			cookie_txt += ev;
			localStorage.setItem(cookie_name, cookie_txt);
		}
		style(day_data_container, "", "display", "none");
		get_cookie();
		num_of_events();
	}
	
}



function get_cookie(){
	events[0].innerHTML = "";
	cookie_txt = localStorage.getItem(cookie_name);
	events[0].innerHTML = cookie_txt;
	delete_cookie();
}
function delete_cookie(){
	for(let i = 0; i < del.length; i++){
		del[i].onclick = ()=>{
			del[i].parentNode.remove();
			let update_cookie = events[0].innerHTML;
			localStorage.setItem(cookie_name, update_cookie);
			get_cookie();
			
		}
	}
}
function close_events(){
	let ce = g(".close_events");
	ce[0].onclick = ()=>{
		style(events_container[0], "", "display", "none");
		num_of_events();
	}
};
load(close_events);


function num_of_events(){
	let calendar_day = g(".calendar_day");
	for(let i = 0; i < calendar_day.length; i++){
		cookie_name = year.innerHTML + "-" + month.innerHTML + "-" + (i+1);
		get_cookie();
		let ecc = g(".event_container");
		calendar_day[i].getElementsByClassName("event_num")[0].innerHTML = "Ilość wpisów: " + ecc.length;
	}
}
load(num_of_events);