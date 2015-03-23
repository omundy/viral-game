

/*
	
	TO DO
	
	Owen: 
	
	scoring
		next page
		associate buttons with right image
	
	popups
		function will know what to do
		html as string
	
	
	
	*/



/**
 *	VIDEO FUNCTIONS
 */
var video_close_goto = -1;
function show_popup_video(file,width,height,xcloseframe){
	var str = '';
	str += '<video autoplay width="'+ width +'" height="'+ height +'"><source src="'+ file +'" type="video/mp4">';
	str += 'Your browser does not support the video tag.</video>';
	$('#video_container').html(str);
	$('#video_window').css('display','block');
	video_close_goto = xcloseframe;
}
function close_popup_video(){
	$('#video_container').html('');
	$('#video_window').css('display','none');
	if (video_close_goto > -1){
		scene_control('metube',video_close_goto)
	}
}
$('#close_video_window').on('click',function(){ close_popup_video(); })
/* all video buttons */
$('#video_player_test').on('click',function(){ show_popup_video('assets/img/metube/nyan.mp4',540,360,-1) })
$('#video_player_rapmv').on('click',function(){ show_popup_video('assets/img/metube/nyan.mp4',540,360,4) })






var cinder_date_name = '';
var cinder_date_current_img = -1;
var cinder_date_totalpages = 0;

/**
 *	CINDER DATE FUNCTIONS
 */
// (re)start date
function start_cinder_date(datename,totalpages){
	cinder_date_name = datename;
	cinder_date_current_img = 0;
	cinder_date_totalpages = totalpages;
}
// next button
function cinder_date_next_img(){
	console.log(cinder_date_current_img)
	if (cinder_date_current_img < cinder_date_totalpages ){
		cinder_date_current_img ++;
		$('.cinder_date').html('<img src="assets/img/cinder/'+ cinder_date_name +'/'+ cinder_date_current_img +'.png">')
	} else {
		console.log()
		
		if (cinder_date_name == 'brody_date'){
			instacam_camera_roll.roll_twothree.locked = false;
		} else if (cinder_date_name == 'scene_date'){
			//
		}
		
	}
		
}
$('.cinder_date_next').on('click',function () { cinder_date_next_img() })






// scene size
var sceneW = 1092;
var sceneH = 768;

// determines positions of scenes
					// 0	1	  2		3	  3		4	  5		6	  7		8	  9		10		11	   12	  13	 14     15     16
var scene_positions = [0, 1092, 2184, 3276, 4368, 5460, 6552, 7644, 8736, 9828, 10920, 12012, 13104, 14196, 15288, 16380, 17472, 18564];	

// current scene and frame
var current_scene = {};

// current_score, temp_score
var current_score = { 'camgirl':0, 'martyr':0, 'troll':0 }
var temp_score = { 'camgirl':0, 'martyr':0, 'troll':0 }

// keep track of tags selected by user
var tags_selected = []
var tags_used = []

// all scenes keep track in here
var scene_map = {
	
	'home':[
		'welcome',
	],
	'cinder':[
		'cinder0',
        'cinder1',
        'cinder2',
        'cinder3',
        'cinder4',
	],
	'dumblr':[
		'dumblr0',
        'dumblr1',
        'dumblr2',
        'dumblr3',
        'dumblr4',
    'dumblr5',
        'dumblr6',
        'dumblr7',
        'dumblr8',
    'dumblr9',
    'dumblr10',
    'dumblr11',
    'dumblr12',
    'dumblr13',
    'dumblr14',
    'dumblr15',
    'dumblr16',
	],
	'instacam':[
        'instacam0', // 1_genres
        'instacam1', // 2a1_selfies_hair
        'instacam2', // 2a2_selfies_swag
        'instacam3', // 2a3_selfies_background
        'instacam4', // 2b1_food_chooser
        'instacam5', // 2b2_food_background
        'instacam6', // 2c1_cameroll_selector
        'instacam7', // 3_tags
        'instacam8', // affirmation
	],
	'metube':[
		'metube0',
        'metube1',
        'metube2',
        'metube3',
        'metube4',
        'metube5',
	],
}







/**
 *	scene_control()
 *	- Controls all scene movement
 */
function scene_control(scene,frame){
	console.log('scene_control('+ scene +','+ frame +')');
	var update = false; // whether or not to update the scene/frame
	
	// in wrong scene, move to different scene
	if (current_scene.scene != scene){
		console.log('---in wrong scene ('+ current_scene.scene +') - moving to '+ scene);
		
		hide_scenes();
		$('#'+scene+'_scene').show();
		frame = 0; // reset position
		$('#'+scene+'_scene').css('margin-left','0');
		update = true; // update current_scene
	}
	// in correct scene, wrong frame
	else if (current_scene.scene == scene && current_scene.frame != frame){
		console.log('---in correct scene ('+ current_scene.scene +')');
		
		// don't go below zero
		if (frame == -1 && current_scene.frame <= 0){ console.log('---already at zero'); } 
		// don't go above number of frames in scene
		else if (frame >= scene_map[scene].length ){ console.log('---already at max '); }
		// otherwise go ahead
		else {
			console.log('---but wrong frame ('+ current_scene.frame +'). moving to '+ frame);
			
			// calculate new positions
			var moveto = scene_positions[frame];
			var movefrom = scene_positions[current_scene.frame];
			console.log('---moving from: '+ movefrom +' to: '+moveto);

			// move scene				
			$('#'+scene+'_scene').animate( {"margin-left": '-='+ (moveto-movefrom)},500, function(){ 
					scene_loader(scene,frame)
				});
			// update current_scene
			update = true; 
		}
		
	} else {
		console.log('---apparently all is ok');
	}
	
	// SCORING
	// reset temp score if on app home page
	if (frame == 0){
		reset_temp_score()
	}
	
	// save, report
	if (update){ 
		current_scene = {'scene':scene,'frame':frame}
	}
	report();
}

/**
 *	scene_loader() 
 * 	- Detects current_scene and makes special things happen
 *	- Also updates all buttons to disabled / or not, etc.
 */
function scene_loader(scene,frame){
	console.log('scene_loader('+ scene +','+ frame +')')
	
	//alert(scene +','+ frame)
	
	// CINDER
	if (scene == 'cinder'){
		
		
	} 
	
	// DUMBLR
	else if (scene == 'dumblr'){
		if (frame == '1'){
			
		}
		// tags
		else if (frame == '15'){ add_tags(); }
		// affirmation
		else if (frame == '16'){ affirmation_loader(); }
	} 
	
	// INSTACAM
	else if (scene == 'instacam'){
		
		if (frame == '1'){
			update_buttons(instacam_camera_roll);
		}
		// tags
		else if (frame == '7'){ add_tags() }
		// affirmation
		else if (frame == '8'){ affirmation_loader(); }
	}
	
	// METUBE
	else if (scene == 'metube'){
		if (frame == '1'){
			
		}
		// tags
		else if (frame == '4'){ add_tags() }
		// affirmation
		else if (frame == '5'){ affirmation_loader(); }
	}
	
	/* use code 
		to grey out / disable buttons
		hover effect 
		*/
}



function update_buttons(obj){
	
	$.each( obj.buttons, function( key, value ) {

		
		//console.log($('#selfie_bhair'));
		//console.log (value.btn_img)
		
		
		
		
		//alert(key +','+ value)


		/*
		// make button
		if (value.locked == true){
			var btn = '<img src ="assets/'+ obj.meta.path + value.btn_img +'">'
		} else if (value.disabled == true){
			var btn = '<img src ="assets/'+ obj.meta.path + value.btn_img +'">'
		} else {
			var btn = '<img src ="assets/'+ obj.meta.path + value.btn_img +'">'
		}
		$('.scene').append(btn)
		
		*/
		
	});
	
	
}






var finished_pages = {
	'instacam': 'instacam_camera_roll',
}





/* SCORING FUNCTIONS */




/**
 *	Update current_score using temp_score, called on post pages
 *	- Only gets counted at affirmation / post
 */

function update_current_score(){
	
	current_score.camgirl += temp_score.camgirl;
	current_score.martyr += temp_score.martyr;
	current_score.troll += temp_score.troll;
	
	// report score
	console.log('current_score: '+ JSON.stringify(current_score))
	console.log('temp_score: '+ JSON.stringify(temp_score))
		
	// update the score bars
	$('#bar1_bar').animate( {"left": '-='+ current_score.camgirl*20 },500);
	$('#bar2_bar').animate( {"left": '-='+ current_score.martyr*20 },500);
	$('#bar3_bar').animate( {"left": '-='+ current_score.troll*20 },500);	
}
function update_temp_score(score_obj){
	//console.log('update_temp_score('+ JSON.stringify(score_obj) +')')
	temp_score.camgirl += score_obj.camgirl;
	temp_score.martyr += score_obj.martyr;
	temp_score.troll += score_obj.troll;
	report();
}
function reset_temp_score(){
	temp_score = { 'camgirl':0, 'martyr':0, 'troll':0 }
}

var nextButton = { // target 
	};


// instacam frame 1 (HAIR), not dependent upon previous pages
$('#selfie_hbasic').on('click',function(){ instacam_preview(instacam_camera_roll.buttons['selfie_hbasic']) });
$('#selfie_hmartyr').on('click',function(){ instacam_preview(instacam_camera_roll.buttons['selfie_hmartyr']) });
$('#selfie_hcam').on('click',function(){ instacam_preview(instacam_camera_roll.buttons['selfie_hcam']) });
$('#selfie_htroll').on('click',function(){ instacam_preview(instacam_camera_roll.buttons['selfie_htroll']) });

// instacam frame 2 (SWAG), DEPENDENT upon choices on previous pages
$('#selfie_smartyr').on('click',function(){ instacam_preview(instacam_camera_roll.buttons['selfie_smartyr']) });

// instacam frame 3 (BACKGROUND), DEPENDENT upon choices on previous pages
$('#bkg_onethree').on('click',function(){ instacam_preview(instacam_camera_roll.buttons['bkg_onethree']) });


function instacam_preview(buttonObj){
	
	console.log(buttonObj)
	
	// preview the file in the instacam window
	$('.instacam_preview').html( '<img src="assets/img/instacam/'+ buttonObj.preview_img +'">' ) 
	
	temp_score = buttonObj.score;
	report();
	
	// set the target for the "next" button
	//$('.next_button').
	
		
}

function instacam_next(buttonObj){
	// target is based on preview
	
	// update temp_score
	
	// move to next page, which is also showing the preview image
	
}



/**
 *	TAGS
 */	
 
// add tags to tags frame 
function add_tags(){
	// reset tags_selected
	tags_selected = [];
	// reset
	$('.tags').html('')
	
	var obj = tags;
	for (var key in obj) {
		var log = '';
		if (obj.hasOwnProperty(key)) {
			var prop = obj[key];
			/*for (var k in prop) {
				if (prop.hasOwnProperty(k)) {
					log += key +': '+ k  +': '+ prop[k] +"\n";
				}
			}*/
			
			// make sure tag hasn't been used
			if (tags_used.indexOf(key) > -1){
				console.log(key +' has been used')	
				$('.tags').append('<button class="tag_disabled" disabled>'+ key + '</button>');
			}
			else {
				$('.tags').append('<button class="tag_'+ key + '">'+ key + '</button>');
				$('.tag_'+key).click( function(){ tag_handler( $(this) ) })
			}
		}
	}
}


// handle click from tags
function tag_handler(element){
	// get tag
	var tag = element.attr("class")
	// get tag name only
	var tag_name = tag.replace('tag_', '');
	
	if (tag_name.indexOf("tag_selected") > -1){
		// remove from string
		tag_name = tag_name.replace(' tag_selected', '');
		// remove class
		element.removeClass('tag_selected')
		// remove from tags_selected
		remove_from_arr(tags_selected,tag_name);
	} else {
		// make sure it hasn't been used before
		if (tags_used.indexOf(tag_name) == -1){
			// add class
			element.addClass('tag_selected')
			// add to tags_selected
			tags_selected.push(tag_name);
		}
	}
	
	
	
	//console.log(tags[tag_name])
	console.log(tags_selected)
	

}
// confirm selected tags and add them to used
function tag_confirm(){
	
	if (tags_selected.length > 2){
		alert("You can only use 2 tags at a time!!!")
	} else {
		// add tags to used
		tags_used = tags_used.concat(tags_selected)
		
		// make sure there is just one of each
		var tag_names_clean = [];
		$.each(tags_used, function(i, tag){
			if($.inArray(tag, tag_names_clean) === -1) tag_names_clean.push(tag);
		});
		tags_used = tag_names_clean;
		
		// do score
		$.each(tags_selected, function(i, tag){
			update_temp_score(tags[tag].score);
		});
		
		// go to affirmation page
		scene_control(current_scene.scene,current_scene.frame +1)
	}
	
	console.log('tags_selected: '+ tags_selected)
	console.log('tags_used: '+ tags_used)
}
$('#dumblr_tag_confirm').on('click',function(){ tag_confirm() });
$('#instacam_tag_confirm').on('click',function(){ tag_confirm() });
$('#metube_tag_confirm').on('click',function(){ tag_confirm() });




function affirmation_loader(){
	// update current_score with temp_score
	update_current_score();
	// figure out their affirmation image
	if (temp_score.camgirl + temp_score.martyr + temp_score.troll > 0){
		var aff_img = 'assets/img/affirmations/gainedfollowers_overlay_notification.gif';
	} else {
		var aff_img = 'assets/img/affirmations/lostfollowers_overlay_notification.gif';
	}
	// reset temp_score
	reset_temp_score();
	
	var ahtml = '<input type="image" alt="button" src="assets/img/affirmations/ok.png" class="affirmation_ok_button">';
	ahtml += '<img src="'+ aff_img +'">';
	$('.affirmation').html(ahtml)
	$('.affirmation_ok_button').on('click',function(){ scene_control('home',0) })
	
	report();
}









/**
 *	REPORTING AND TESTING FUNCTIONS
 */	

// Displays information about scenes, scores, etc.
function report(){
	$('#report').html('current_scene: '+ JSON.stringify(current_scene) +'; current_score: '+ JSON.stringify(current_score) +'; temp_score: '+ JSON.stringify(temp_score));	
	console.log(current_scene);
}

// make buttons for testing
$.each( scene_map, function( scene ) {
	//alert(key)
	$.each( this, function( frame,title ) {
		$('#nav').append('<button id="'+ title +'">'+ title +'</button><br>')
		$("#"+title).on('click',function () { scene_control(scene,frame); });
	});
	$('#nav').append('<br>')
});





// run game
hide_scenes();
scene_control('home',0);	

