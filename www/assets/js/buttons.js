
	
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
$('.metube_button')
	.on('click',function(){ scene_control('metube', 0) })
*$('.dumblr_button')
	.on('click',function(){ scene_control('dumblr', 0) })*
$('.cinder_button')
	.on('click',function(){ scene_control('cinder', 0) })













/* INSTACAM BUTTONS */

$('#instacam_home_selselfie_btn')
	.on('click',function(){ scene_control('instacam',1) })
	.mouseover(function(){ this.src = 'assets/img/instacam/home/selselfiehov.png' })
	.mouseout(function(){ this.src = 'assets/img/instacam/home/selselfie.png' });
$('#instacam_home_selfood_btn')
	.on('click',function(){ scene_control('instacam',4) })
	.mouseover(function(){ this.src = 'assets/img/instacam/home/selfoodhov.png' })
	.mouseout(function(){ this.src = 'assets/img/instacam/home/selfood.png' });
$('#instacam_home_selcam_btn')
	.on('click',function(){ scene_control('instacam',6) })
	.mouseover(function(){ this.src = 'assets/img/instacam/home/selcamhov.png' })
	.mouseout(function(){ this.src = 'assets/img/instacam/home/selcam.png'});
$('.instacam_totags')
	.on('click',function(){ scene_control('instacam', 7) })
	.mouseover(function(){ this.src = 'assets/img/instacam/nexthov.png' })
	.mouseout(function(){ this.src = 'assets/img/instacam/next.png' });
	
$('#foodie_twothree').on('click',function(){ instacam_preview( instacam_camera_roll.buttons.foodie_twothree ) })
	
	
	
/* METUBE BUTTONS */

$('.metube_mv').on('click',function(){ scene_control('metube',1) });
$('.metube_vlog').on('click',function(){ scene_control('metube',2) });
$('.metube_shock').on('click',function(){ scene_control('metube',3) });




/* DUMBLR BUTTONS */

$('.reblog').on('click',function(){ scene_control('dumblr',2) });
$('.entry').on('click',function(){ scene_control('dumblr',1) });
$('.diary').on('click',function(){ scene_control('dumblr',6) });
$('.manifesto').on('click',function(){ scene_control('dumblr',8) });
$('.rant').on('click',function(){ scene_control('dumblr',7) });
	

$('.a_dumblr_img_btn').on('click',function(){ dumblr_img_clicked( 'a', $(this).attr('id') ) });
$('.b_dumblr_img_btn').on('click',function(){ dumblr_img_clicked( 'b', $(this).attr('id') ) });
$('.c_dumblr_img_btn').on('click',function(){ dumblr_img_clicked( 'c', $(this).attr('id') ) });
$('.d_dumblr_img_btn').on('click',function(){ dumblr_img_clicked( 'd', $(this).attr('id') ) });




function dumblr_img_clicked(page,id){
	console.log('dumblr_img_clicked('+ page +','+ id +')')
	
	// update tracker
	dumblr_img_button_tracker[page] = id;
	
	if (page == 'a'){
		scene_control('dumblr',3)
	} else if (page == 'b'){
		scene_control('dumblr',4)
	} else if (page == 'c'){
		scene_control('dumblr',5)
	} else if (page == 'd'){
		scene_control('dumblr',12)
	}
	// update the temp_score	
	update_temp_score(dumblr.buttons[id].score)
	
	report() 
}
function dumblr_img_disablr(){
	if ( dumblr.buttons[dumblr_img_button_tracker['a']] > 0){
		disable_btn ( dumblr.buttons[dumblr_img_button_tracker['a']] );
		disable_btn ( dumblr.buttons[dumblr_img_button_tracker['b']] );
		disable_btn ( dumblr.buttons[dumblr_img_button_tracker['c']] );
		disable_btn ( dumblr.buttons[dumblr_img_button_tracker['d']] );
	}
}

	
	
/* CINDER BUTTONS */

$('.pass').on('click',function(){ scene_control(current_scene.scene,current_scene.frame +1) });
$('.lastpass').on('click',function(){ scene_control('cinder', 0) });

$('#date_lilb_btn').on('click',function(){ update_temp_score(cinder.buttons.date_lilb_btn.score); montage_window('date_lilb','lilb_1'); disable_btn(cinder.buttons.date_lilb_btn) });
$('#date_bro_btn').on('click',function(){ update_temp_score(cinder.buttons.date_bro_btn.score); montage_window('date_bro','brody_1'); disable_btn(cinder.buttons.date_bro_btn) });
$('#date_josie_btn').on('click',function(){ update_temp_score(cinder.buttons.date_josie_btn.score); montage_window('date_josie','josie_1'); disable_btn(cinder.buttons.date_josie_btn) });
$('#date_elliot_btn').on('click',function(){ update_temp_score(cinder.buttons.date_elliot_btn.score); montage_window('date_elliot','elliot_1'); disable_btn(cinder.buttons.date_elliot_btn) });



/* BTN FUNCTIONS */

function queue_disable_btn(obj){
	//console.log('queue_disable_btn('+ JSON.stringify(obj) +')');
	btns_to_disable.push(obj.id);
	//console.log ('btns_to_disable: '+ JSON.stringify(btns_to_disable))
}
function disable_btn(obj){
	//console.log('disable_btn('+ JSON.stringify(obj) +')');
	obj.disabled = true;
}











