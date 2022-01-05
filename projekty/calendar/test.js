


let month_array = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

let year;
let month;
let month_length;
let month_number;

let year_text;

function set_calendar(){
	year = g("#year");
	month = g("#month");
	let name_of_the_day = g(".name_of_the_day");
	let notd_width = (1/7)*100;
	style(name_of_the_day, "*", "width", notd_width + "%");
	let date = new Date();
	let year_now = date.getFullYear();
	let month_now = date.getMonth();
	month_number = month_now;
	year.innerHTML = parseInt(year_now);
	month.innerHTML = month_array[parseInt(month_now)];
	getDate();
}
load(set_calendar);

function getDate(){
	var d = new Date();
	month_length = new Date(year.innerHTML, month_number+1, 0).getDate();
}
function change_calendar(){
	reset_calendar();
	getDate();
	calendar_day();
	day_description();
	
	num_of_events();
}


function change_year(){
	let left_arrow_year = g(".left_arrow_year");
	let right_arrow_year = g(".right_arrow_year");
	
	left_arrow_year[0].onclick = ()=>{
		year_text = parseInt(year.innerHTML);
		year_text -= 1;
		year.innerHTML = parseInt(year_text);
		
		change_calendar();
	}
	right_arrow_year[0].onclick = ()=>{
		year_text = parseInt(year.innerHTML);
		year_text += 1;
		year.innerHTML = parseInt(year_text);
		
		change_calendar();
	}
}
load(change_year);



function change_month(){
	let left_arrow_month = g(".left_arrow_month");
	let right_arrow_month = g(".right_arrow_month");

	left_arrow_month[0].onclick = ()=>{
		parseInt(month_number);
		month_number -= 1;
		if(month_number < 0){
			month_number = 11;
			let prev_year = parseInt(year.innerHTML) - 1;
			year.innerHTML = prev_year;
		}
		month.innerHTML = month_array[parseInt(month_number)];
		
		change_calendar();
	}
	right_arrow_month[0].onclick = ()=>{
		parseInt(month_number);
		month_number += 1;
		if(month_number > 11){
			month_number = 0;
			year.innerHTML = parseInt(year.innerHTML) + 1;
		}
		month.innerHTML = month_array[parseInt(month_number)];
		
		change_calendar();
	}
}
load(change_month);


