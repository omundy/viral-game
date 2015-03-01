$(document).ready(function(){
	
	/*
		
		TO DO
		
		Owen: 
			Make popup video player, blue bg http://blurjs.com/?bg=2
		scoring
			next page
			associate buttons with right image
		
		popups
			function will know what to do
			html as string
		
		
		
		*/
	
	
	
	
	
	
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
            'instacam0', // 1_genres
            'instacam1', // 2a1_selfies_hair
            'instacam2', // 2a2_selfies_swag
            'instacam3', // 2a3_selfies_background
            'instacam4', // 2b1_food_chooser
            'instacam5', // 2b2_food_background
            'instacam6', // 2c1_cameroll_selector
            'instacam7', // 3_tags
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
	
	
	
	
/* GLOBAL BUTTONS */
	
	$('.home_button')
		.on('click',function(){ scene_control('home',0)})
		.mouseover(function(){ this.src = 'assets/img/instacam/bakhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/bak.png' });
	$('.back_button')
		.on('click',function(){ scene_control(current_scene.scene,0) })
		.mouseover(function(){ this.src = 'assets/img/instacam/bakhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/bak.png' });
	$('.next_button')
		.on('click',function(){ scene_control(current_scene.scene,current_scene.frame +1) })
		.mouseover(function(){ this.src = 'assets/img/instacam/nexthov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/next.png' });
	
	/* HOMESCREEN BUTTONS */
	
	$('.instacam_button')
		.on('click',function(){ scene_control('instacam',0)})
		.mouseover(function(){ this.src = 'assets/img/home/instacam.gif' })
		.mouseout(function(){ this.src = 'assets/img/home/instacam.gif' });
	$('.metube_button')
		.on('click',function(){ scene_control('metube', 0) })
		.mouseover(function(){ this.src = 'assets/img/home/metube.gif' })
		.mouseout(function(){ this.src = 'assets/img/home/metube.gif' });
	$('.dumblr_button')
		.on('click',function(){ scene_control('dumblr', 0) })
		.mouseover(function(){ this.src = 'assets/img/home/dumblr.gif' })
		.mouseout(function(){ this.src = 'assets/img/home/dumblr.gif' });
	$('.cinder_button')
		.on('click',function(){ scene_control('cinder', 0) })
		.mouseover(function(){ this.src = 'assets/img/home/cinder.gif' })
		.mouseout(function(){ this.src = 'assets/img/home/cinder.gif' });
	
	

	/* INSTACAM BUTTONS */
	
	$('#instacam_home_selselfie_btn')
		.on('click',function(){ scene_control('instacam',1) })
		.mouseover(function(){ this.src = 'assets/img/instacam/home/selselfiehov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/home/selselfie.png' });
	$('#instacam_home_selfood_btn')
		.on('click',function(){ scene_control('instacam',4) })
		.mouseover(function(){ this.src = 'assets/img/instacam/home/selfoodhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/home/selfood.png' });
	$('#instacam_home_selcam_btn').on('click',function(){ scene_control('instacam',6) })
		.mouseover(function(){ this.src = 'assets/img/instacam/home/selcamhov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/home/selcam.png'});
	$('.instacam_totags').on('click',function(){ scene_control('instacam', 7) })
		.mouseover(function(){ this.src = 'assets/img/instacam/nexthov.png' })
		.mouseout(function(){ this.src = 'assets/img/instacam/next.png' });
		
	/*METUBE BUTTONS */
	
	$('.metube_mv')
		.on('click',function(){ scene_control('metube',1) });
	$('.metube_vlog')
		.on('click',function(){ scene_control('metube',2) });
	$('.metube_shock').on('click',function(){ scene_control('metube',3) });
	
	/*DUMBLR BUTTONS */
	
	$('.reblog')
		.on('click',function(){ scene_control('dumblr',2) });
	$('.entry')
		.on('click',function(){ scene_control('dumblr',1) });
	$('.diary')
		.on('click',function(){ scene_control('dumblr',1) });
	$('.manifesto')
		.on('click',function(){ scene_control('dumblr',1) });
	$('.entry')
		.on('click',function(){ scene_control('dumblr',1) });
		
	/*CINDER BUTTONS */
	
	$('.pass')
		.on('click',function(){ scene_control(current_scene.scene,current_scene.frame +1) });
	$('.lastpass')
		.on('click',function(){ scene_control('cinder', 0) });
	$('.date_lilb')
		.on('click',function(){ scene_control('cinder',1) });
	$('.date_bro')
		.on('click',function(){ scene_control('cinder',1) });
	$('.date_scene')
		.on('click',function(){ scene_control('cinder',1) });
	$('.date_elliot')
		.on('click',function(){ scene_control('cinder',1) });


	
	
	
	

	var finished_pages = {
		'instacam': 'instagram_camera_roll',
	}


	function scene_loader(scene,frame){
		console.log('scene_loader('+ scene +','+ frame +')')
		
		//alert(scene +','+ frame)
		
		if (scene == 'instacam'){
			
			if (frame == '1'){
				update_buttons(instagram_camera_roll);
				
				
				
			}
			else if (frame == '2'){
				//update_buttons(instagram_camera_roll);
			}
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
	
	

	
	
	
	/* SCORING FUNCTIONS */
	
	var score = { 'camgirl':0, 'martyr':0, 'troll':0 }
	var tempscore = { 'camgirl':0, 'martyr':0, 'troll':0 }
	
	
	/**
     *	Update score using tempscore, called on post pages
     */
	
	function update_score(tempscore){
		
		score.camgirl += tempscore.camgirl;
		score.martyr += tempscore.martyr;
		score.troll += tempscore.troll;
		
		// report score
		console.log('score: '+ JSON.stringify(score))
		console.log('tempscore: '+ JSON.stringify(tempscore))
		
		
		// update the score bars

		$('#bar1').animate( {"left": '-='+ score.camgirl },500);
		$('#bar2').animate( {"left": '-='+ score.martyr },500);
		$('#bar3').animate( {"left": '-='+ score.troll },500);
		
	}
	
	
	
	// all app home pages should 
	// reset temp score
	
	// tempscore only gets counted at affirmation / post
	
	
	
	var nextButton = { // target 
		};
	
	function instacam_preview(buttonObj){
		// preview the file in the instacam window
		
		// set the target for the "next" button
	
		
			
	}
	
	function instacam_next(buttonObj){
		// target is based on preview
		
		// update temp score
		
		// move to next page, which is also showing the preview image
		
	}
	
	
	
	// run game
	hide_scenes();
	scene_control('home',0);	
	
}); // /ready()

