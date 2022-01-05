
let typhoon = {
    build: `
    <div id='ship' class='typhoon_container'>
        <div id="degree_sign">
			<div id="deg_ball"></div>
		</div>
        <div class="ship_layer typhoon_layer1"></div>
        <div class="ship_layer typhoon_layer2"></div>
        <div class="ship_layer typhoon_layer3"></div>
    </div>
    `,
    speed_x: 200,
    speed_y: 200,
    hp: 200,
    shield: 100,
	damage: 40,
	healing: 0.1
};
let thunder = {
    build: `
    <div id="ship" class="thunder_container">
		<div id="degree_sign">
			<div id="deg_ball"></div>
		</div>
        <div class="ship_layer thunder_layer1"></div>
		<div class="ship_layer thunder_layer2"></div>
		<div class="ship_layer thunder_layer3"></div>
		<div class="ship_layer thunder_layer4"></div>
	</div> 
    `,
    speed_x: 300,
    speed_y: 300,
    hp: 250,
    shield: 100,
	damage: 30,
	healing: 0.1
}

let waterfall = {
    build: `
    <div id="ship" class="waterfall_container">
		<div id="degree_sign">
			<div id="deg_ball"></div>
		</div>
        <div class="ship_layer waterfall_layer1"></div>
		<div class="ship_layer waterfall_layer2"></div>
		<div class="ship_layer waterfall_layer3"></div>
	</div> 
    `,
    speed_x: 400,
    speed_y: 400,
    hp: 300,
    shield: 100,
	damage: 20,
	healing: 0.1
}



