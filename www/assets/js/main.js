$(document).ready(function(){
	
	// scene size
	var sceneW = 1092;
	var sceneH = 768;
	
	// determines positions of scenes
	var scene_positions = [0,1092,2184,3276,4368,5460,6552,7644,8736,9828];	
	
	// current scene and frame
	var current_scene = {};
	
	// all scenes keep track in here
	var scene_map = {
		
		'home':[
			'welcome',
            'how_to_play',
            'credits',
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
		],
		'instacam':[
            '1_genres',
            '2a1_selfies_hair',
            '2a2_selfies_swag',
            '2a3_selfies_background',
            '2b1_food_chooser',
            '2b2_food_background',
            '2c1_cameroll_selector',
            '3_tags'
		],
		'metube':[
			'metube0',
            'metube1',
            'metube2',
            'metube3',
            'metube4',
		],
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

	
	/**
	 *	scene_control()
	 *	Controls all scene movement
	 */
	function scene_control(scene,frame){
		console.log('scene_control('+ scene +','+ frame +')');
		var update = false;
		
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
		
		// save, report
		if (update){ 
			current_scene = {'scene':scene,'frame':frame}
			}
		console.log(current_scene);
	}
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
	hide_scenes();
	scene_control('home',0);
	
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


	var finished_pages = {
		'instacam': 'instagram_camera_roll',
	}


	function scene_loader(scene,frame){
		console.log(scene +','+ frame)
		
		
		if (scene == 'instacam'){
			
			if (frame == '1'){
				//update_buttons(instagram_camera_roll);
			}
			else if (frame == '2'){
				//update_buttons(instagram_camera_roll);
			}
		}
		
		
	
		
		/* use code 
			to grey out / disable buttons
			hover effect
			
			
		problem: 3 steps for instacam and the pose after hair is dependent on hair	
			*/
		
		
		
		
	}

	function update_buttons(obj){
		
		$.each( obj.buttons, function( key, value ) {
			// make button
			if (value.locked == true){
				var btn = '<img src ="assets/'+ obj.meta.path + value.btn_img +'">'
			} else if (value.disabled == true){
				var btn = '<img src ="assets/'+ obj.meta.path + value.btn_img +'">'
			} else {
				var btn = '<img src ="assets/'+ obj.meta.path + value.btn_img +'">'
			}
			$('.scene').append(btn)
		});
		
		
	}
	
	
	/* GLOBAL BUTTONS */
	
	$('.home_button')
		.on('click',function(){ scene_control('home',0)})
		.mouseover(function(){ this.src = 'assets/img/instacam/bakhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/bak.png' });
		
	$('.back_button')
		.on('click',function(){ scene_control(current_scene.scene,current_scene.frame-1) })
		.mouseover(function(){ this.src = 'assets/img/instacam/bakhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/bak.png' });
	$('.next_button')
		.on('click',function(){ scene_control(current_scene.scene,current_scene.frame-1) })
		.mouseover(function(){ this.src = 'assets/img/instacam/nexthov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/next.png' });
	
	
	/* INSTACAM BUTTONS */
	
	$('#instacam_home_selselfie_btn')
		.on('click',function(){ scene_control('instacam',1) })
		.mouseover(function(){ this.src = 'assets/img/instacam/home/selselfiehov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/home/selselfie.png' });
	$('#instacam_home_selfood_btn')
		.on('click',function(){ scene_control('instacam',2) })
		.mouseover(function(){ this.src = 'assets/img/instacam/home/selfoodhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/home/selfood.png' });
	$('#instacam_home_selcam_btn').on('click',function(){ scene_control('instacam',3) })
		.mouseover(function(){ this.src = 'assets/img/instacam/home/selcamhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/home/selcam.png'});
	
	
	
	
	
}); // /ready()

