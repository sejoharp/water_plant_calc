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
function check_precondition(value, error_message, message_point){
	if(is_input_invalid(value)){
		$('<li></li>', {
			text: error_message
		}).appendTo(message_point);
	}
}
function all_input_correct(messages){
	return messages.children('li').length === 0;
}

$('button').on('click', function(){
	var $messages = $('#messages');
	var $height = $('#height');
	var $circumference_top = $('#circumference_top');
	var $circumference_buttom = $('#circumference_buttom');
	var $result = $('#result');

	$messages.empty();
	check_precondition($height.val(), 'height invalid.', $messages);
	check_precondition($circumference_buttom.val(), 'circumference buttom invalid.', $messages);
	check_precondition($circumference_top.val(), 'circumference top invalid.', $messages);

	if (all_input_correct($messages)){
		var heighte = parseFloat($height.val());
		var buttome = parseFloat($circumference_buttom.val());
		var tope = parseFloat($circumference_top.val());
		var result = compute_water_plant_volume(heighte, buttome, tope);
		$result.empty().append(result + ' Liter');
	} else {
		$result.empty();
	}
});