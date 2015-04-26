





var current_montage_scene = '';
var current_montage_frame = '';

function montage_window(m_scene,m_frame){
	console.log('montage_window('+ m_scene +', '+ m_frame +')');
	
	current_montage_scene = m_scene;
	current_montage_frame = m_frame;
	
	// show montage_window
	$('#montage_window').show();
	// hide other montage_scene
	$('.montage_scene').hide();
	// show the scene
	$('#' + m_scene).show();
	// show the frame
	$('#' + m_frame).show();
}

function montage_frame(m_hide,m_frame){
	console.log('montage_frame('+ m_hide +','+ m_frame +')');
	// hide other montage_frame
	$('#' + m_hide).hide();
	// show the frame
	$('#' + m_frame).show();
	
}

function montage_close(){
	
	update_buttons(cinder);
	
	$('#' + current_montage_scene).hide();
	$('#' + current_montage_frame).hide();
	
	$('.montage_scene').hide();
	$('#montage_window').hide();
}



var report_test = false;

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

// keep track of instacam stuff
var instacam_choices = {};
var instacam_temp_score = {};

// keep track of tags selected by user
var tags_selected = []
var tags_used = []

// keep track of things to disable
var btns_to_disable = []

// keep track of dumblr reblog imgs
function new_dumblr_img_button_tracker(){
	dumblr_img_button_tracker = {'a':0,'b':0,'c':0,'d':0};
}
var dumblr_img_button_tracker;
new_dumblr_img_button_tracker(); 


// all scenes keep track in here
var scene_map = {
	
	'home':[
		'welcome',
	],
	'cinder':[
		'cinder0', 'cinder1', 'cinder2', 'cinder3', 'cinder4'
	],
	'dumblr':[
		'dumblr0', 'dumblr1', 'dumblr2', 'dumblr3', 'dumblr4', 'dumblr5', 
		'dumblr6', 'dumblr7', 'dumblr8', 'dumblr9', 'dumblr10', 'dumblr11',
	    'dumblr12', 'dumblr13', 'dumblr14', 'dumblr15', 'dumblr16',
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
		'metube0', 'metube1', 'metube2', 'metube3', 'metube4', 'metube5',
	],
	'testing':[
		'testing_camgirl', 'testing_martyr', 'testing_troll',
	],
}







/**
 *	scene_control()
 *	- Controls all scene movement
 */
function scene_control(scene,frame){
	
	button_noise()
	
	console.log('scene_control('+ scene +','+ frame +')');
	var update = false; // whether or not to update the scene/frame
	
	if (scene == 'testing'){
		
		if (frame == 0){
			update_temp_score({ 'camgirl':1, 'martyr':0, 'troll':0 })
		} else if (frame == 1){
			update_temp_score({ 'camgirl':0, 'martyr':1, 'troll':0 })
		}else if (frame == 2){
			update_temp_score({ 'camgirl':0, 'martyr':0, 'troll':1 })
		}
		update_current_score();
		reset_temp_score()
		return;
	}
	
	// in wrong scene, move to different scene
	else if (current_scene.scene != scene){
		//console.log('---> in wrong scene ('+ current_scene.scene +') - moving to '+ scene);
		
		hide_scenes();
		$('#'+scene+'_scene').show();
		frame = 0; // reset position
		$('#'+scene+'_scene').css('margin-left','0');
		update = true; // update current_scene
		scene_updater(scene,frame)
	}
	// in correct scene, wrong frame
	else if (current_scene.scene == scene && current_scene.frame != frame){
		//console.log('---> in correct scene ('+ current_scene.scene +')');
		
		// don't go below zero
		if (frame == -1 && current_scene.frame <= 0){ 
			//console.log('---> already at zero'); 
		} 
		// don't go above number of frames in scene
		else if (frame >= scene_map[scene].length ){ 
			//console.log('---> already at max '); 
		}
		// otherwise go ahead
		else {
			//console.log('---> but wrong frame ('+ current_scene.frame +'). moving to '+ frame);
			
			// calculate new positions
			var moveto = scene_positions[frame];
			var movefrom = scene_positions[current_scene.frame];
			//console.log('---> moving from: '+ movefrom +' to: '+moveto);

			// move scene				
			$('#'+scene+'_scene').animate( {"margin-left": '-='+ (moveto-movefrom)},500, function(){ 
					scene_updater(scene,frame)
				});
			// update current_scene
			update = true; 
		}
		
	} else {
		//console.log('---> apparently all is ok');
	}
	
	// save, report
	if (update){ 
		current_scene = {'scene':scene,'frame':frame}
	}
	report();
}

/**
 *	scene_updater() 
 * 	- Detects current_scene and makes special things happen
 *	- Also updates all buttons to disabled / or not, etc.
 */
function scene_updater(scene,frame){
	//console.log('scene_updater('+ scene +','+ frame +')')
	
	
	$('.affirmation_curtain').css('display','none');
	
	// SCORING
	// reset EVERYTHING if on app home page
	if (frame == 0){
		reset_temp_score()
		reset_instacam_temp_score()
		btns_to_disable = []
		if (loser_checker()){
			montage_window('m_gameover','m_gameover_frame')
		}
	}
	
	//alert(scene +','+ frame)
	
	// CINDER
	if (scene == 'cinder'){
		
		update_buttons(cinder)
		
		// affirmation
		if (frame == '4'){ affirmation_loader(); }
		
	} 
	
	// DUMBLR
	else if (scene == 'dumblr'){
		
		update_buttons(dumblr)
		
		if (frame == '0'){
			// reset dumblr images
			new_dumblr_img_button_tracker(); 	
		}
		else if (frame == '6'){ show_dumblr_words(); }
		// tags
		else if (frame == '15'){ add_tags(); }
		// affirmation
		else if (frame == '16'){ 
			affirmation_loader(); 
			dumblr_img_disablr()
		}

	} 
	
	// INSTACAM
	else if (scene == 'instacam'){
		
		update_buttons(instacam_camera_roll)
		
		
		if (frame > 1){
			update_temp_score(instacam_temp_score);
			//console.log('instacam_temp_score: '+ JSON.stringify(instacam_temp_score))
		}
		
		if (frame == '0'){
			// reset choices array
			instacam_choices = {};
			instacam_temp_score = {};
			// reset images
			$('.instacam_preview').html('');
			$('.instacam_preview').css('background','none');
		}
		// selfies
		else if (frame == '1'){
			$('.instacam_preview').html( '<img src="assets/img/instacam/pics/selfies/default.png">' ) 
		}
		// tags
		else if (frame == '7'){ add_tags() }
		// affirmation
		else if (frame == '8'){ 
			affirmation_loader(); 
		}
		
		// reset instacam_temp_score for next frame
		reset_instacam_temp_score()
	}
	
	// METUBE
	else if (scene == 'metube'){
		
		update_buttons(metube)
		
		if (frame == '1'){
			
		}
		// tags
		else if (frame == '4'){ add_tags() }
		// affirmation
		else if (frame == '5'){ affirmation_loader(); }
	}
	// report
	report();
}



function show_dumblr_words(){
	var obj = dumblr_words.buttons.manifesto;
	
	// for each text
	// for each phrase
	$.each( obj, function( key, value ) {	
		
		var dumblr_phrase = '';
		
		
		// for each selection in the phrase
		$.each( value, function( key2, value2 ) {
		
			dumblr_phrase += '<button class="">'+ value2.text + '</button>';
		
		/*
		// make sure tag hasn't been used
			if (tags_used.indexOf(key) > -1){
				//console.log(key +' has been used')	
				$('.tags').append('<button class="tag_disabled" disabled>'+ key + '</button>');
			}
			else {
				$('.tags').append('<button class="tag_'+ key + '">'+ key + '</button>');
				$('.tag_'+key).click( function(){ tag_handler( $(this) ) })
			}
		*/
		})
		
		$('.dumblr_words').append('<div class="dumblr_words_phrase"><span class="dumblr_words_phrase_title">'+ key + '</span>'+ dumblr_phrase +'</div>');
		
	})	
}





// unlock buttons
function unlock_cameraroll(buttonObj){
	//console.log('unlock_cameraroll('+ JSON.stringify(buttonObj) +')')
	buttonObj.locked = false;
}


function update_buttons(obj){
	
	// loop through all the buttons for an object
	$.each( obj.buttons, function( key, value ) {

		//console.log(key +' => '+ value)

		// (UN)LOCK INSTACAM CAMERAROLL
		if (current_scene.scene == 'instacam' && current_scene.frame == 6){
			
			// IF THERE IS A LOCKED IMG
			if ( value.btn_img_locked ){
				// LOCK IT DOWN
				if ( value.locked == true ){
					$('#'+key)
						.attr('src','assets/img/instacam/'+ value.btn_img_locked)
						.removeClass('instacam_hover')
						.addClass('disabledButton')
						.prop('disabled', true);
				} 
				// OR NOT
				else {
					$('#'+key)
						.attr('src','assets/img/instacam/'+ value.btn_img)
						.addClass('instacam_hover')
						.removeClass('disabledButton')
						.prop('disabled', false);
				}
				
			}
		}




		
		
		if (current_scene.frame > -1){
			
			if (value.disabled == true){
				//console.log('time to disable: ' + key)
				
				// DISABLE INSTACAM, CINDER, DUMBLR
				if ( $('#'+key).length ){
					
					//console.log( '#'+key )
					
					$('#'+key)
						.attr('title','disabled')
						.css('opacity','0.3')
						.removeClass('instacam_hover')
						.addClass('disabledButton')
						.prop('disabled', true);
					if ($('#'+key).attr('onmouseout') ){	
						//console.log( $('#'+key).attr('onmouseout') )	
						$('#'+key).trigger('mouseover');
					}
				}
				
				// DISABLE METUBE
				else if ( $('.'+key).length ){	
					
					//console.log( '.'+key )
					
					$('.'+key)
						.attr('title','disabled')
						.css('opacity','0.3')
						.removeClass('instacam_hover')
						.addClass('disabledButton')
						.prop('disabled', true);
					if ($('.'+key).attr('onmouseout') ){
						//console.log( $('.'+key).attr('onmouseout') )
						$('.'+key).trigger('mouseover');
					}	
				}		
			}
		
		}
		
		/*	
		
		if (value.disabled == true){
			//console.log('time to disable: ' + key)
			
			$('#'+key)
				.attr('title','disabled')
				.css('opacity','0.3')
				.removeClass('instacam_hover')
				.addClass('disabledButton')
				.prop('disabled', true);
			$('.'+key)
				.attr('title','disabled')
				.css('opacity','0.3')
				.removeClass('instacam_hover')
				.addClass('disabledButton')
				.prop('disabled', true);
		}
	
		*/

		
	});
	
	
}





/*********************************************************************************************
 *	SCORING FUNCTIONS
 *********************************************************************************************/	


var montages_played = {
	camgirl: {
		dslut: false,
		camgirl: false,
		pornstar: false
	},
	martyr: {
		avenger: false, 
		megalomaniac: false, 
		martyr: false
	},
	troll: {
		cyberbully: false, 
		meme: false, 
		troll: false
	}
}

function check_score_montage(){
	
	// check for action on score
	// open montage player
	// CAMGIRL
	if (current_score.camgirl > 15 && current_score.camgirl <= 29){
		if (montages_played.camgirl.dslut == false){
			montage_window('dslut','dslut_1');
			montages_played.camgirl.dslut = true
		}
	}
	else if (current_score.camgirl > 30 && current_score.camgirl <= 44){
		if (montages_played.camgirl.camgirl == false){
			montage_window('camgirl','camgirl_1');
			montages_played.camgirl.camgirl = true
		}
	}
	else if (current_score.camgirl >= 45){
		if (montages_played.camgirl.pornstar == false){
			montage_window('pornstar','pornstar_1');
			montages_played.camgirl.pornstar = true
		}	
	} 
		
	// MARTYR	
	if (current_score.martyr > 15 && current_score.martyr <= 29){
		if (montages_played.martyr.avenger == false){
			montage_window('avenger','avenger_1')
			montages_played.martyr.avenger = true
		}
	}
	else if (current_score.martyr > 30 && current_score.martyr <= 44){
		if (montages_played.martyr.megalomaniac == false){
			montage_window('mega','mega_1')
			montages_played.martyr.megalomaniac = true
		}
	}
	else if (current_score.martyr >= 45){
		if (montages_played.martyr.martyr == false){
			montage_window('martyr','martyr_1')
			montages_played.martyr.martyr = true
		}		
	} 
	
	
	// TROLL
	if (current_score.troll > 15 && current_score.troll <= 29){
		if (montages_played.troll.cyberbully == false){
			montage_window('cyberbully','cyberbully_1')
			montages_played.troll.cyberbully = true
		}
	}
	else if (current_score.troll > 30 && current_score.troll <= 44){
		if (montages_played.troll.meme == false){
			montage_window('meme','meme_1')
			montages_played.troll.meme = true
		}
	}
	else if (current_score.troll >= 45){
		if (montages_played.troll.troll == false){
			montage_window('troll','troll_1')
			montages_played.troll.troll = true
		}
	}
	
	
}


/**
 *	Update current_score using temp_score, called on post pages
 *	- Only gets counted at affirmation / post
 */

function update_current_score(){
	
	current_score.camgirl += temp_score.camgirl;
	current_score.martyr += temp_score.martyr;
	current_score.troll += temp_score.troll;
	
	check_score_montage();
	
	// report score
	//console.log('current_score: '+ JSON.stringify(current_score))
	//console.log('temp_score: '+ JSON.stringify(temp_score))
	
	var factor = 300 / 45;
	
	// update the score bars
	// maximum score is 60; length divided by 60
	$('#bar1_bar').animate( {"left": '+='+ (temp_score.camgirl) * factor },500);
	$('#bar2_bar').animate( {"left": '+='+ (temp_score.martyr) * factor },500);
	$('#bar3_bar').animate( {"left": '+='+ (temp_score.troll) * factor },500);	
	
	
	report();
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
	report();
}
function reset_instacam_temp_score(){
	instacam_temp_score = { 'camgirl':0, 'martyr':0, 'troll':0 }
	report();
}




// instacam frame 1: HAIR ( selfie1 )
$('#selfie_hbasic').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_hbasic'] ) });
$('#selfie_hmartyr').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_hmartyr'] ) });
$('#selfie_hcam').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_hcam'] ) });
$('#selfie_htroll').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_htroll'] ) });

// instacam frame 2:SWAG ( selfie2 ), DEPENDENT upon choices on previous pages
$('#selfie_smartyr').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_smartyr'] ) });
$('#selfie_sbasic').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_sbasic'] ) });
$('#selfie_scam').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_scam'] ) });
$('#selfie_stroll').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['selfie_stroll'] ) });

// instacam frame 3:BACKGROUND ( selfie3 ), DEPENDENT upon choices on previous pages
$('#bkg_onethree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_onethree'] ) });
$('#bkg_twotwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_twotwo'] ) });
$('#bkg_oneone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_oneone'] ) });
$('#bkg_twothree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_twothree'] ) });
$('#bkg_onetwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_onetwo'] ) });
$('#bkg_twoone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_twoone'] ) });
$('#bkg_onefour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_onefour'] ) });
$('#bkg_twofour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkg_twofour'] ) });

// instacam frame 4 ( foodie1 )
$('#foodie_twothree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_twothree'] ) });
$('#foodie_oneone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_oneone'] ) });
$('#foodie_twoone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_twoone'] ) });
$('#foodie_onetwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_onetwo'] ) });
$('#foodie_twofour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_twofour'] ) });
$('#foodie_onethree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_onethree'] ) });
$('#foodie_onefour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_onefour'] ) });
$('#foodie_twotwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['foodie_twotwo'] ) });

// instacam frame 5 ( foodie2 )
$('#bkgf_onethree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_onethree'] ) });
$('#bkgf_twotwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_twotwo'] ) });
$('#bkgf_oneone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_oneone'] ) });
$('#bkgf_twothree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_twothree'] ) });
$('#bkgf_onetwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_onetwo'] ) });
$('#bkgf_twoone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_twoone'] ) });
$('#bkgf_onefour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_onefour'] ) });
$('#bkgf_twofour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['bkgf_twofour'] ) });

// instacam frame 6 ( camroll1 )
$('#roll_twotwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_twotwo'] ) });
$('#roll_twothree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_twothree'] ) });
$('#roll_threefour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_threefour'] ) });
$('#roll_onefour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_onefour'] ) });
$('#roll_onethree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_onethree'] ) });
$('#roll_threeone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_threeone'] ) });
$('#roll_twofour').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_twofour'] ) });
$('#roll_onetwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_onetwo'] ) });
$('#roll_threethree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_threethree'] ) });
$('#roll_twoone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_twoone'] ) });
$('#roll_oneone').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_oneone'] ) });
$('#roll_threetwo').on('click',function(){ instacam_preview( instacam_camera_roll.buttons['roll_threetwo'] ) });


function instacam_preview(buttonObj){
	
	/*button_noise()*/
	
	//console.log(buttonObj)
	
	instacam_choices[buttonObj.frame] = buttonObj.id;
	
	//btns_to_disable.push(buttonObj.id)
	
	
	// selfie1
	if (buttonObj.frame == 'selfie1'){
		var preview_img = buttonObj.preview_img;
	}
	// selfie2
	else if (buttonObj.frame == 'selfie2'){
		var preview_img = buttonObj.preview_img[instacam_choices.selfie1];
	}
	// selfie3
	else if (buttonObj.frame == 'selfie3'){
		// change only background
		var background_img = buttonObj.preview_img;
	}	
	
	// foodie1
	else if (buttonObj.frame == 'foodie1'){
		var preview_img = buttonObj.preview_img;	
	}
	// foodie2
	else if (buttonObj.frame == 'foodie2'){
		// change only background
		var background_img = buttonObj.preview_img;	
		//console.log(buttonObj)
	}
	
	// camroll1
	else if (buttonObj.frame == 'camroll1'){
		var preview_img = buttonObj.preview_img;	
	}
	
	
	// preview the file in the instacam window
	if (preview_img){
		$('.instacam_preview').html( '<img src="assets/img/instacam/'+ preview_img +'">' ) 
	}
	// preview the BACKGROUND in the instacam window
	if (background_img){
		$('.instacam_preview').css( 'background-image', 'url(assets/img/instacam/'+ background_img +')' ) 
	}

	// instacam_temp_score ( temp_score updated from next_button )
	instacam_temp_score = buttonObj.score;

	report();
}








/*********************************************************************************************
 *	TAGS & AFFIRMATION
 *********************************************************************************************/	
 
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
				//console.log(key +' has been used')	
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
	//console.log(tags_selected)
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
	
	//console.log('tags_selected: '+ tags_selected)
	//console.log('tags_used: '+ tags_used)
}
$('#dumblr_tag_confirm').on('click',function(){ tag_confirm() });
$('#instacam_tag_confirm').on('click',function(){ tag_confirm() });
$('#metube_tag_confirm').on('click',function(){ tag_confirm() });


// affirmation
function affirmation_loader(){
	
	
	if (current_scene.scene == 'metube'){
		// loop through all btns_to_disable clicked
		for (var i = 0; i< btns_to_disable.length; i++){	
			disable_btn( window[current_scene.scene].buttons[btns_to_disable[i]] )
			//console.log('time to MARK AS DISABLED: '+ current_scene.scene +','+ btns_to_disable[i])
		}
		// reset btns_to_disable
		btns_to_disable = []
	}
	else if (current_scene.scene == 'instacam'){
		var obj = instacam_choices;
		for (var key in obj) {
			var log = '';
			if (obj.hasOwnProperty(key)) {
				log += key +': '+ obj[key] +"\n";
				
				disable_btn( instacam_camera_roll.buttons[obj[key]] )
			}
			//console.log('instacam_choices ========= '+ log);
		}
		
	} 
	
	// update current_score with temp_score
	update_current_score();
	// figure out their affirmation image
	if (temp_score.camgirl + temp_score.martyr + temp_score.troll > 0){
		var aff_img = 'assets/img/affirmations/gainedfollowers_overlay_notification.gif';
		var aff_img_hover = 'assets/img/affirmations/gain_okhov.png';
	} else {
		var aff_img = 'assets/img/affirmations/lostfollowers_overlay_notification.gif';
		var aff_img_hover = 'assets/img/affirmations/lost_okhov.png';
	}
	// reset temp_score
	reset_temp_score();
	
	var ahtml = '<input type="image" alt="button" src="assets/img/affirmations/ok.png" class="affirmation_ok_button" onmouseover="src=\''+aff_img_hover+'\';" onmouseout="src=\'assets/img/affirmations/ok.png\';">';
	
	ahtml += '<img class="affirmation_img" src="'+ aff_img +'">';
	$('.affirmation').html(ahtml)
	$('.affirmation_ok_button').on('click',function(){ scene_control('home',0) })
	
	$('.affirmation_curtain').css('display','block');
	
	report();
}




/* SOUND FUNCTIONS */

var sounds =  {
	'asif': new Howl({
		urls: ['assets/sound/click/asif.mp3']
	}),
	'boing': new Howl({
		urls: ['assets/sound/click/boing.mp3']
	}),
	'fap': new Howl({
		urls: ['assets/sound/click/fap.mp3']
	}),
	'snap': new Howl({
		urls: ['assets/sound/click/snap.mp3']
	}),
	'static': new Howl({
		urls: ['assets/sound/click/static.mp3']
	}),
	
};

// dummy function for
//var soundtrack = new Howl({ /* null */ });




function button_noise(){
	
	// play a specific sound
	//sounds.asif.play()
	
	// pick random sound to play
	var keys = Object.keys(sounds)
    var sound = sounds[keys[ keys.length * Math.random() << 0]];
    if (play_sound == true){
	    sound.play()   
	}
}



function loser_checker(){
	// if all buttons are disabled, and you have not maxed out any score bar, you lose
	
	// metube
	var obj = metube.buttons;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			// are any not yet disabled?
			if (obj[key].disabled == false){
				//console.log('loser_checker() ========= metube not disabled');
				return false;
			}
		}
	}
	// cinder
	var obj = cinder.buttons;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			// are any not yet disabled?
			if (obj[key].disabled == false){
				//console.log('loser_checker() ========= cinder not disabled');
				return false;
			}
		}
	}
	// dumblr
	var obj = dumblr.buttons;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			// are any not yet disabled?
			if (obj[key].disabled == false){
				//console.log('loser_checker() ========= dumblr not disabled');
				return false;
			}
		}
	}
	// instacam_camera_roll
	var obj = instacam_camera_roll.buttons;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			// are any not yet disabled?
			if (obj[key].disabled == false){
				//console.log('loser_checker() ========= instacam not disabled');
				return false;
			}
		}
	}
	return true;
}





// sounds
var play_sound = true;


// run game
hide_scenes();
scene_control('home',0);


// comment these out to go/test live
test_buttons();
var report_test = true;
$('#load_progress').hide();
play_sound = false;





var soundtrack = new Howl({
	urls: ['assets/sound/soundtrack.mp3'],
	autoplay: play_sound,
	loop: true,
	volume: 0.5,
	onend: function() {
		//console.log('Soundtrack just looped...');
	}
});

