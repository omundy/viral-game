
function create_buttons(obj){
	
	$.each( obj.buttons, function( key, value ) {
		// make button
		var btn = '<img src ="assets/img/'+ obj.meta.path + value.btn_img +'">'
		$('body').append(btn)
	});
	
	
	for (var key in obj.buttons) {
		
		$('body').append(obj.buttons)
	}
}



function print_obj (obj){
	
	for (var key in obj) {
		var log = '';
		if (obj.hasOwnProperty(key)) {
			var prop = obj[key];
			for (var k in prop) {
				if (prop.hasOwnProperty(k)) {
					log += key +': '+ k  +': '+ prop[k] +"\n";
				}
			}
		}
		console.log(log);
	}

	
}