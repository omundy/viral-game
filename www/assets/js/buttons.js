
	
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
$('.dumblr_button')
	.on('click',function(){ scene_control('dumblr', 0) })
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
$('#instacam_home_selcam_btn').on('click',function(){ scene_control('instacam',6) })
	.mouseover(function(){ this.src = 'assets/img/instacam/home/selcamhov.png' })
	.mouseout(function(){ this.src = 'assets/img/instacam/home/selcam.png'});
$('.instacam_totags').on('click',function(){ scene_control('instacam', 7) })
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
$('.manifesto').on('click',function(){ scene_control('dumblr',10) });
$('.rant').on('click',function(){ scene_control('dumblr',8) });
	
	
	
	
/* CINDER BUTTONS */

$('.pass').on('click',function(){ scene_control(current_scene.scene,current_scene.frame +1) });
$('.lastpass').on('click',function(){ scene_control('cinder', 0) });
$('.date_lilb').on('click',function(){ scene_control('cinder',1) });
$('.date_bro').on('click',function(){ start_cinder_date('brody',10); scene_control('cinder',4) });
$('.date_scene').on('click',function(){ scene_control('cinder',5) });
$('.date_elliot').on('click',function(){ scene_control('cinder',1) });



