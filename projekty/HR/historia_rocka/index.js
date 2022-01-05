{
let count = 0;
let si;
function years(event){
	let yrs = event.target.dataset.year;
	let year = g("#" + yrs);
    let yearInfo = g(".yearInfo");
	style(yearInfo, "*", "display", "none");
	style(year, "", "display", "block");
}
}