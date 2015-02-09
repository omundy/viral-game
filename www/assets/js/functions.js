



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


/*

var screenW,screenH;

window.addEventListener('resize', setWindowSize);

function setWindowSize() {
	if (typeof (window.innerWidth) == 'number') {
		screenW = window.innerWidth;
		screenH = window.innerHeight;
	} else {
		if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			screenW = document.documentElement.clientWidth;
			screenH = document.documentElement.clientHeight;
		} else {
			if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
				screenW = document.body.clientWidth;
				screenH = document.body.clientHeight;
			}
		}
	}
	console.log('screen: '+screenW+','+screenH);
}
	*/
