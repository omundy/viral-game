// moving things in here as they are finished


/**
 *	REPORTING AND TESTING FUNCTIONS
 */	

// Displays information about scenes, scores, etc.
function report(){
	$('#report').html('current_scene: '+ JSON.stringify(current_scene) 
		+'; current_score: '+ JSON.stringify(current_score) 
		+'; temp_score: '+ JSON.stringify(temp_score)
		+'; instacam_temp_score: '+ JSON.stringify(instacam_temp_score)
		+'; instacam_choices: '+ JSON.stringify(instacam_choices)
		);	
	console.log(current_scene);
}

// make buttons for testing
function test_buttons(){
	$.each( scene_map, function( scene ) {
		//alert(key)
		$.each( this, function( frame,title ) {
			$('#nav').append('<button id="'+ title +'">'+ title +'</button>')
			$("#"+title).on('click',function () { scene_control(scene,frame); });
		});
		$('#nav').append('<br><br>')
	});
}	
	




/**
 *	MONTAGE FUNCTIONS
 */
 
 
 function show_popup_montage(file){
	var str = '';
	str += '<div style="width:728px; height:1092px>';
	
	
	str += '<div id="confirm_btns">';
	str += '<button id="gohome_video_window">go back</button> ';
	str += '<button id="confirm_video_window">confirm</button>';
	str += '</div>';	
	
	$('#video_container').html(str);
	$('#video_window').css('display','block');
	$('#confirm_video_window').on('click',function(){ close_popup_video('confirm'); })
	$('#gohome_video_window').on('click',function(){ close_popup_video('home'); })
}
 



/**
 *	VIDEO FUNCTIONS
 */
var video_close_goto = -1;
function show_popup_video(file,width,height){

	soundtrack.pause();


	var str = '';
	str += '<video autoplay width="'+ width +'" height="'+ height +'"><source src="'+ file +'" type="video/mp4">';
	str += 'Your browser does not support the video tag.</video>';
	
	
	str += '<div id="confirm_btns">';
	str += '<button id="gohome_video_window">go back</button> ';
	str += '<button id="confirm_video_window">confirm</button>';
	str += '</div>';	
	
	$('#video_container').html(str);
	$('#video_window').css('display','block');
	$('#confirm_video_window').on('click',function(){ close_popup_video('confirm'); })
	$('#gohome_video_window').on('click',function(){ close_popup_video('home'); })
}
function show_popup_video_confirmonly(file,width,height){
	
	soundtrack.pause();
	
	var str = '';
	str += '<video autoplay width="'+ width +'" height="'+ height +'"><source src="'+ file +'" type="video/mp4">';
	str += 'Your browser does not support the video tag.</video>';
	
	
	str += '<div id="confirm_btns">';
	str += '<button id="gohome_video_window"><img src="assets/img/metube/videos/goback.png" class="metube_confirmonly_back"></button> ';
	str += '</div>';	
	
	$('#video_container').html(str);
	$('#video_window').css('display','block');
	$('#confirm_video_window').on('click',function(){ close_popup_video('confirm'); })
	$('#gohome_video_window').on('click',function(){ close_popup_video('home'); })
}
function close_popup_video(action){
	
	soundtrack.play();
	
	if (action == 'confirm'){
		scene_control('metube',4)
	} else {
		reset_temp_score()
	}
	$('#video_container').html('');
	$('#video_window').css('display','none');
	
}

/* all video buttons */
$('.video_player_test').on('click',function(){ show_popup_video_confirmonly('assets/img/metube/videos/liz.mp4', 854,480) })

$('.metube_confirmonly_back')
	.mouseover(function(){ this.src = 'assets/img/instacam/bakhov.png' })
	.mouseout(function(){ this.src = 'assets/img/instacam/bak.png' });

$('.mv_rap').on('click',function(){ update_temp_score(metube.buttons.mv_rap.score); show_popup_video('assets/img/metube/videos/mypussy.mp4', 854,480,4) })
$('.mv_pop').on('click',function(){ update_temp_score(metube.buttons.mv_pop.score); show_popup_video('assets/img/metube/videos/dogfriend.mp4', 854,480,4) })
$('.mv_parody').on('click',function(){ update_temp_score(metube.buttons.mv_parody.score); show_popup_video('assets/img/metube/videos/testicle.mp4',854,480,4) })
$('.vlog_rant').on('click',function(){ update_temp_score(metube.buttons.vlog_rant.score); show_popup_video('assets/img/metube/videos/rant.mp4', 854,480,4) })
$('.vlog_diary').on('click',function(){ update_temp_score(metube.buttons.vlog_diary.score); show_popup_video('assets/img/metube/videos/amanda.mp4',854,480,4) })
$('.vlog_comedy').on('click',function(){ update_temp_score(metube.buttons.vlog_comedy.score); show_popup_video('assets/img/metube/videos/comedy.mp4', 854,480,4) })
$('.shock_challenge').on('click',function(){ update_temp_score(metube.buttons.shock_challenge.score); show_popup_video('assets/img/metube/videos/challenge.mp4',854,480,4) })
$('.shock_snuff').on('click',function(){ update_temp_score(metube.buttons.shock_snuff.score); show_popup_video('assets/img/metube/videos/snuff.mp4',854,480,4) })
$('.shock_camwhore').on('click',function(){ update_temp_score(metube.buttons.shock_camwhore.score); show_popup_video('assets/img/metube/videos/camgirl.mp4',854,480,4) })

/**
 *	hide_scenes()
 *	To load a new one
 */
function hide_scenes(){
	$('#home_scene').hide();
	$('#cinder_scene').hide();
	$('#dumblr_scene').hide();
	$('#instacam_scene').hide();
	$('#metube_scene').hide();
}

/**
 *	Add keyboard controls
 */
$(document).keydown(function(e) {
	//console.log('key: '+ e.which)
	
	if(e.which == 38) { // up
	} else if(e.which == 40) { // down
	
	} else if(e.which == 39) { // right
		scene_control(current_scene.scene,current_scene.frame+1)
	} else if(e.which == 37) { // left
		scene_control(current_scene.scene,current_scene.frame-1)
	} 
});



/**
 *	Prints object
 */
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


/**
 *	Is var in array?
 */
function in_array(needle, arrhaystack) {
    return (arrhaystack.indexOf(needle) > -1);
}
/**
 *	remove var from array
 */
function remove_from_arr(arr, what) {
	
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
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





