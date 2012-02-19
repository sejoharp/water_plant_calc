function compute_water_plant_volume(height, circumference_bottom, circumference_top){
	height_m = translate_cm_to_m(height);
	radius_buttom_m = compute_radius(translate_cm_to_m(circumference_bottom));
	radius_top_m = compute_radius(translate_cm_to_m(circumference_top));
	return compute_volume_in_liter(height_m, radius_buttom_m, radius_top_m) / 4;
}
function compute_radius(circumference){
	return circumference / (Math.PI * 2);
}
function translate_cm_to_m(cm){
    return cm / 100;
}
function compute_volume_in_liter(height, radius_bottom, radius_top){
	return ((height * Math.PI ) / 3) * (Math.pow(radius_bottom,2) + radius_bottom * radius_top + Math.pow(radius_top,2))* 1000;
}
function is_input_invalid(input){
	if(input ===''){
		return true;
	} else if (input <= 0){
		return true;
	} else if (!jQuery.isNumeric(input)){
		return true;
	}
	return false;
}
$('button').on('click', function(){
	var $messages = $('#messages');
	var $height = $('#height');
	var $circumference_top = $('#circumference_top');
	var $circumference_buttom = $('#circumference_buttom');
	var $result = $('#result');
	var valid_input = true;

	$messages.empty();

	if(is_input_invalid($height.val())){
		$messages.append('<li>height invalid.</li>');
		valid_input = false;
	}
	if(is_input_invalid($circumference_buttom.val())){
		$messages.append('<li>circumference buttom invalid.</li>');
		valid_input = false;
	}
	if(is_input_invalid($circumference_top.val())){
		$messages.append('<li>circumference top invalid.</li>');
		valid_input = false;
	}
	if (valid_input){
		var heighte = parseFloat($height.val());
		var buttome = parseFloat($circumference_buttom.val());
		var tope = parseFloat($circumference_top.val());
		var result = compute_water_plant_volume(heighte, buttome, tope);
		$result.empty().append(result + ' Liter');
	} else {
		$result.empty();
	}
});