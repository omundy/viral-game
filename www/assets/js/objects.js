

function display_insta_pic(){
	
}


//problems with this format: there are multple classes that correspond to different buttons on differen pages but they have the same coordinates
//should i create distinct classes for each button? or is there another work around

var instagram_camera_roll = {
	
	'meta': {
		'path':' img/instacam/'
	},
	'buttons': { //these are only buttons that generate images
 /* SELFIES ICONS -- put hover effects on all of these- glow & enlarge: all images in img/instacam/selfie*/
	//1st choice
		'hbasic': { // css class
			'locked': false, // on beginning
			'disabled':false, // after used
			// what is shown
			'display':'img', 
			'btn_img': 'selfie/hairbasic.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfie/hairbasic.png', //greyed out
			'btn_clicked':display_insta_pic('pics/selfies/hair_choice1/defb.png'),
			// how the score is tallied
			'score': { 'camgirl':-2, 'martyr':-2, 'troll':-2 }
		},
		'hmartyr': {
			'locked':false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'selfie/hairmartyr.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfie/hairmartyr.png', //greyed out
			'btn_clicked':display_insta_pic('pics/selfies/hair_choice1/defm.png'),
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		'hcam': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'selfie/haircamho.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfie/haircamho.png', //greyed out
			'btn_clicked':display_insta_pic('pics/selfies/hair_choice1/defd.png'),
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'htroll': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'selfies/hairtroll.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/hairtroll.png', //greyed out
			'btn_clicked':display_insta_pic('pics/selfies/hair_choice1/deft.png'),
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
//2nd choice		
		'scam': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'selfies/swagcamho.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/swagcamho.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'sbasic': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'selfies/swagbasic.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/swagbasic.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':-2, 'martyr':-2, 'troll':-2 }
		},
		'stroll': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'selfies/swagtroll.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/swagtroll.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'smartyr': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'selfies/swagmartyr.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/swagmartyr.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
/* FOODIES ICONS -- put hover effects on all of these-glow & enlarge: all images in img/instacam/foodie*/
		'oneone': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/pasta.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/pasta.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/pasta.png'), 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		'onetwo': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/starbux.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/starbux.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/starbux.png'), 
			'score': { 'camgirl':-2, 'martyr':-2, 'troll':-2 }
		},
		'onethree': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/sushi.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/sushi.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/sushi.png'), 
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'onefour': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/taco.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/taco.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/taco.png'), 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'twoone': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/smoothie.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/smoothie.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/smoothie.png'), 
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'twotwo': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/wine.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/wine.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/wine.png'), 
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'twothree': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/bagel.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/bagel.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/bagel.png'), 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'twofour': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'foodies/steak.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'selfies/steak.png', //greyed out
			'btn_clicked':display_insta_pic('pics/foodies/steak.png'), 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
/* BKG ICONS -- put hover effects on all of these-glow & enlarge: all images in img/instacam/bkg*/
		'oneone': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkg/cheeto.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/cheeto.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE  
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'onetwo': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkg/heart.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/heart.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE  
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'onethree': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkgs/alien.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/alien.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE  
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'onefour': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkg/latte.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/latte.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':-2, 'martyr':-2, 'troll':-2 }
		},
		'twoone': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkg/killman.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/killman.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		'twotwo': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkg/boob.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/boob.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'twothree': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkg/doom.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/doom.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		'twofour': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'bkg/meme.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'bkg/meme.png', //greyed out
			//'btn_clicked':display_insta_pic(''), THIS IS RELIANT ON THE 1ST CHOICE MADE  
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
/* CAMERA ROLL ICONS -- put hover effects on all of these-glow & enlarge: all images in img/instacam/cameraroll*/
		'oneone': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/weenie.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'cameraroll/weenie.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/weenie.png'), 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'onetwo': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/nails.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'cameraroll/nails.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/nails.png'), 
			'score': { 'camgirl':-2, 'martyr':-2, 'troll':-2 }
		},
		'onethree': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/gun.png',
			'btn_img_locked': 'cameraroll/gunlok.png',
			'btn_img_disabled': 'cameraroll/gun.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/guns.png'), 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		'onefour': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/fedora.png',
			'btn_img_locked': 'cameraroll/fedoralok.png',
			'btn_img_disabled': 'cameraroll/fedora.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/fedora.png'), 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'twoone': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/scene.png',
			'btn_img_locked': 'cameraroll/scenelok.png',
			'btn_img_disabled': 'cameraroll/scene.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/scene.png'), 
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'twotwo': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/cat.png',
			'btn_img_locked': 'cameraroll/catlok.png',
			'btn_img_disabled': 'cameraroll/cat.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/catz.png'), 
			'score': { 'camgirl':2, 'martyr':0, 'troll':0 }
		},
		'twothree': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/dik.png',
			'btn_img_locked': 'cameraroll/diklok.png',
			'btn_img_disabled': 'cameraroll/dik.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/dik.png'), 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		'twofour': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/moloshe.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'cameraroll/moloshe.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/moloshe.png'), 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'threeone': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/lilb.png',
			'btn_img_locked': 'cameraroll/lilblok.png',
			'btn_img_disabled': 'cameraroll/lilb.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/lilb.png'), 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'threetwo': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/dylan.png',
			'btn_img_locked': 'cameraroll/dylanlok.png',
			'btn_img_disabled': 'cameraroll/dylan.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/dylan.png'), 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		'threethree': {
			'locked': false,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/nude.png',
			//'btn_img_locked': '',
			'btn_img_disabled': 'cameraroll/nude.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/nude.png'), 
			'score': { 'camgirl':0, 'martyr':0, 'troll':2 }
		},
		'threefour': {
			'locked': true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'cameraroll/dylan.png',
			'btn_img_locked': 'cameraroll/dylanlok.png',
			'btn_img_disabled': 'cameraroll/dylan.png', //greyed out
			'btn_clicked':display_insta_pic('pics/cameraroll/dylan.png'), 
			'score': { 'camgirl':0, 'martyr':2, 'troll':0 }
		},
		
	}
}


/*
	
	FOUR TYPES OF POINTS- shown on a status bar at the bottom of every screen:
Troll
Martyr
Camgirl
Basic (subtract __ points from all categories)




CAMERA ROLL (NOT PAIRED WITH ANYTHING)

file path: 
img/instacam/pics/cameraroll

dik.png (+2 martyr)
lilb.png(+2troll)
nails.png (basic, -1 in every category)
nude.png (+2 Camgirl)
scene.png (+2 camgirl)
weenie.png (+2 troll)
fedora.png(+2 troll)
gun.png (+2 martyr)
dylan.png(+2 martyr)
catz.png (+2 Camgirl)
moloshe.png (+2 troll)
we have 1 image that we haven’t created yet coz we want to relate it to something we r making l8r
____________________
SELFIES (without backgrounds)


file path: 
img/instacam/pics/selfies/swag_choice2

sbhb.png (basic, -4 in every category)
sbhd.png (-2 in every category, +2 cam girl)
sbhm.png (-2 in every category, +2 martyr)
sbht.png (-2 every category, +2 troll)
sdhb.png (-2 every category, +2 camgirl)
sdhd.png (+4 camgirl)
sdhm.png (+2 camgirl +2 martyr)
sdht.png (+2 camgirl +2 troll)
smhb.png (-2 every category, +2 martyr)
smhd.png (+2 camgirl, +2 martyr)
smhm.png (+4 martyr)
smht.png (+2 troll, +2 martyr)
sthd.png (+2 troll, +2 camgirl)
sthm.png (+2troll, +2 martyr)
stht.png (+2troll, +2 troll)
sthb.png (+2troll, -2 every category)

SELFIES (paired with backgrounds)
file path: 
img/instacam/pics/selfies/withbkg_finalchoice

sbhb_alien.png (basic, -4 in every category, +2 camgirl)
sbhb_boob.png (basic, -4 in every category, +2 troll)
sbhb_doom.png (basic, -4 in every category, +2 martyr)
sbhb_heart.png (basic, -4 in every category +2 camgirl)
sbhb_killman.png (basic, -4 in every category, +2 martyr)
sbhb_latte.png (basic, -4 in every category, -2 in every category)
sbhb_meme.png (basic, -4 in every category, +2 troll)
sbhd_alien.png (-2 in every category, +2 cam girl, +2 camgirl) 
sbhd_boob.png (-2 in every category, +2 cam girl, +2 camgirl)
sbhd_cheeto.png (-2 in every category, +2 cam girl +2 troll)
sbhd_doom.png (-2 in every category, +2 cam girl +2 martyr)
sbhd_heart.png (-2 in every category, +2 cam girl +2 camgirl)
sbhd_killman.png (-2 in every category, +2 cam girl +2 martyr)
sbhd_latte.png (-2 in every category, +2 cam girl -2 in every category)
sbhd_meme.png (-2 in every category, +2 cam girl +2 troll)
sbhm_alien.png (-2 in every category, +2 martyr +2 camgirl) 
sbhm_boob.png (-2 in every category, +2 martyr +2 troll)
sbhm_cheeto.png (-2 in every category, +2 martyr, +2 troll)
sbhm_doom.png (-2 in every category, +2 martyr, +martyr)
sbhm_heart.png (-2 in every category, +2 martyr, +2 camgirl)
sbhm_killman.png (-2 in every category, +2 martyr +2 martyr)
sbhm_latte.png (-2 in every category, +2 martyr, -2 in every category)
sbhm_meme.png (-2 in every category, +2 martyr +2troll)
sbht_alien.png (-2 every category, +2 troll , +2 camgirl)
sbht_boob.png (-2 every category, +2 troll +2 troll)
sbht_cheeto.png (-2 every category, +2 troll +2 troll)
sbht_doom.png (-2 every category, +2 troll +2 martyr)
sbht_heart.png (-2 every category, +2 troll, +2 camgirl)
sbht_killman.png (-2 every category, +2 troll, +2 martyr)
sbht_latte.png (-2 every category, +2 troll, -2 in every category)
sbht_meme.png (-2 every category, +2 troll,  +2 troll)
sbht_cheetos.png (-2 every category, +2 troll +2troll)
sdhb_alien.png (-2 every category, +2 camgirl, +2 camgirl)
sdhb_boob.png (-2 every category, +2 camgirl +2 troll)
sdhb_cheeto.png (-2 every category, +2 camgirl +2 troll)
sdhb_doom.png (-2 every category, +2 camgirl +2 martyr)
sdhb_heart.png (-2 every category, +2 camgirl +2 camgirl)
sdhb_killman.png (-2 every category, +2 camgirl +2 martyr)
sdhb_latte.png (-2 every category, +2 camgirl -2 in every category)
sdhd_alien.png (+4 camgirl , +2 camgirl)
sdhd_boob.png (+4 camgirl +2 troll)
sdhd_cheeto.png (+4 camgirl +2 troll)
sdhd_doom.png (+4 camgirl +2 martyr)
sdhd_heart.png (+4 camgirl, +2 camgirl)
sdhd_killman.png (+4 camgirl , +2 martyr)
sdhd_latte.png (+4 camgirl -2 in every category)
sdhd_meme.png (+4 camgirl, +2 troll)
sdhm_alien.png  (+2 camgirl +2 martyr, +2 camgirl)
sdhm_boob.png  (+2 camgirl +2 martyr +2 troll)
sdhm_cheeto.png  (+2 camgirl +2 martyr +2 troll)
sdhm_doom.png  (+2 camgirl +2 martyr)
sdhm_heart.png  (+2 camgirl +2 martyr)
sdhm_killman.png  (+2 camgirl +2 martyr)
sdhm_latte.png  (+2 camgirl +2 martyr)
sdhm_meme.png  (+2 camgirl +2 martyr)
sdht_alien.png  (+2 camgirl +2 troll) 
sdht_boob.png   (+2 camgirl +2 troll)
sdht_cheeto.png  (+2 camgirl +2 troll)
sdht_doom.png (+2 camgirl +2 troll)
sdht_heart.png (+2 camgirl +2 troll)
sdht_killman.png (+2 camgirl +2 troll)
sdht_latte.png (+2 camgirl +2 troll)
sdht_troll.png (+2 camgirl +2 troll)
smhb_alien.png  (-2 every category, +2 martyr, +2 camgirl)
smhb_boob.png  (-2 every category, +2 martyr +2 troll)
smhb_cheeto.png (-2 every category, +2 martyr +2 troll)
smhb_doom.png (-2 every category, +2 martyr +2 martyr)
smhb_heart.png (-2 every category, +2 martyr +2 camgirl)
smhb_killman.png (-2 every category, +2 martyr +2 martyr)
smhb_latte.png (-4 every category, +2 martyr )
smhb_meme.png (-2 every category, +2 martyr +2troll)
smhd_alien.png  (+2 camgirl, +2 martyr +2 camgirl)
smhd_boob.png  (+2 camgirl, +2 martyr +2 troll)
smhd_cheeto.png  (+2 camgirl, +2 martyr +2 troll)
smhd_doom.png  (+2 camgirl, +2 martyr +2 martyr)
smhd_heart.png  (+2 camgirl, +2 martyr +2 camgirl)
smhd_killman.png   (+2 camgirl, +2 martyr +2 martyr)
smhd_latte.png  (+2 camgirl, +2 martyr -2 in every category)
smhd_meme.png  (+2 camgirl, +2 martyr +2 troll)
smhm_alien.png (+4 martyr +2 camgirl)
smhm_boob.png  (+4 martyr +2 troll)
smhm_cheeto.png (+4 martyr +2 troll)
smhm_doom.png (+4 martyr +2 martyr)
smhm_heart.png (+4 martyr +2 camgirl)
smhm_killman.png (+4 martyr +2 martyr)
smhm_latte.png  (+4 martyr -2 in every category)
smhm_meme.png  (+4 martyr +2 troll)
smht_alien.png (+2 troll, +2 martyr +2 camgirl)
smht_boob.png (+2 troll, +2 martyr +2 troll)
smht_cheeto.png (+2 troll, +2 martyr +2 troll)
smht_doom.png (+2 troll, +2 martyr +2 martyr)
smht_heart.png (+2 troll, +2 martyr +2 camgirl)
smht_killman.png (+2 troll, +2 martyr +2 martyr)
smht_latte.png (+2 troll, +2 martyr -2 in every category)
smht_meme.png  (+2 troll, +2 martyr +2 troll)
sthb_alien.png  (+2troll, -2 every category +2 camgirl)
sthb_boob.png  (+2troll, -2 every category +2 troll)
sthb_cheeto.png  (+2troll, -2 every category +2 troll)
sthb_doom.png  (+2troll, -2 every category +2 martyr)
sthb_eme.png  (+2troll, -2 every category +2 troll)
sthb_heart.png  (+2troll, -2 every category +2 camgirl)
sthb_killman.png  (+2troll, -2 every category +2 martyr)
sthb_latte.png  (+2troll, -2 every category -2 in every category)
sthd_alien.png (+2 troll, +4 camgirl)  
sthd_boob.png   (+4 troll, +2 camgirl)
sthd_cheeto.png   (+4 troll, +2 camgirl)
sthd_doom.png  (+2 troll, +2 camgirl +2 martyr) 
sthd_heart.png  (+2 troll, +4 camgirl ) 
sthd_killman.png  (+2 troll, +2 camgirl +2 martyr)
sthd_latte.png  (+2 troll, +2 camgirl -2 in every category)
sthd_meme.png  (+4 troll, +2 camgirl)
sthm_alien.png  (+2troll, +2 martyr +2 category)
sthm_boob.png  (+2troll, +2 martyr +troll)
sthm_cheeto.png  (+2troll, +2 martyr  +2 troll)
sthm_doom.png  (+2troll, +4 martyr)
sthm_heart.png  (+2troll, +2 martyr +2 camgirl)
sthm_killman.png  (+2troll, +4 martyr)
sthm_latte.png  (+2troll, +2 martyr -2 in every category)
sthm_meme.png  (+4 troll, +2 martyr)
stht_alien.png (+2troll, +2 troll +2 camgirl)
stht_boob.png (+2troll, +4 troll)
stht_cheeto.png (+2troll, +4 troll)
stht_doom.png (+2troll, +2 troll +2 martyr)
stht_heart.png (+2troll, +2 troll +2 camgirl)
stht_killman.png (+2troll, +2 troll +2 martyr)
stht_latte.png (+2troll, +2 troll -2 in every category)
stht_meme.png (+2troll, +4 troll)
______________
FOODIES (without backgrounds)

file path: 
img/instacam/pics/cameraroll

bagel.png (+2 troll)
smoothie.png (+2 camgirl)
pasta.png (+2 martyr)
steak.png (+1 martyr)
starbux.png (-2 every category)
sushi.png (+2 camgirl)
taco.png (+2 troll)
wine.png (+2 camgirl)

FOODIES (PAIRED WITH BACKGROUNDS)

file path: 
img/instacam/pics/cameraroll/withbkg

bagel_killman.png  (+2 trolll, +2 martyr)
bagel_boobs.png (+2 troll, +2troll)
bagel_cheetos.png (+2 troll, +2 troll)
bagel_doom.png (+2 troll, +2 martyr)
bagel_heart.png (+2 troll, +2 camgirl)
bagel_latte.png (+2 troll, -2 in every category)
bagel_meme.png (+2 troll, +2 troll )
bagel_alien.png  (+2 troll, +2 camgirl)
pasta_alien.png (+2 martyr, +2 camgirl )
pasta_boob.png (+2 martyr,+2 troll )
pasta_cheeto.png (+2 martyr, +2 troll )
pasta_doom.png (+2 martyr, +2 martyr )
pasta_heart.png (+2 martyr, +camgirl)
pasta_killman.png (+2 martyr, +martyr)
pasta_latte.png (+2 martyr, -2 in every category)
pasta_meme.png (+2 martyr, +2troll )
smoothie_alein.png (+2 camgirl, +2 camgirl)
smoothie_boob.png (+2 camgirl, +2troll )
smoothie_cheetos.png (+2 camgirl, +1 troll )
smoothie_doom.png (+2 camgirl, +2 martyr )
smoothie_heart.png (+2 camgirl, +2 camgirl)
smoothie_killman.png (+2 camgirl, +2 martyr )
smoothie_latte.png (+2 camgirl, -2 in every category)
smoothie_meme.png (+2 camgirl, +2 camgirl )
starbux_alien.png (-2 in every category, +2 camgirl)
starbux_boobs.png (-2 in every category, +2 troll )
starbux_cheetos.png (-2 in every category, +2 troll)
starbux_doom.png (-2 in every category, +2 martyr)
starbux_heart.png (-2 in every category, +2 camgirl)
starbux_killman.png (-2 in every category, +2 martyr )
starbux_latte.png (-2 in every category, -2 in every category)
starbux_meme.png (-2 in every category,  +2 troll)
steak_alien.png (+2 martyr, +2 camgirl )
steak_boob.png (+2 martyr,+2 troll )
steak_cheeto.png (+2 martyr, +2 troll )
steak_doom.png (+2 martyr, +2 martyr )
steak_heart.png (+2 martyr, +camgirl)
steak_killman.png (+2 martyr, +martyr)
steak_latte.png (+2 martyr, -2 in every category)
steak_meme.png (+2 martyr, +2troll )
sushi_alien.png (+2 camgirl, +2 camgirl)
sushi_boobs.png (+2 camgirl, +2troll )
sushi_cheetos.png (+2 camgirl, +1 troll )
sushi_doom.png (+2 camgirl, +2 martyr )
sushi_heart.png (+2 camgirl, +2 camgirl)
sushi_killman.png (+2 camgirl, +2 martyr )
sushi_latte.png (+2 camgirl, -2 in every category)
sushi_meme.png (+2 camgirl, +2 camgirl )
taco_killman.png  (+2 trolll, +2 martyr)
taco_boobs.png (+2 troll, +2troll)
taco_cheetos.png (+2 troll, +2 troll)
taco_doom.png (+2 troll, +2 martyr)
taco_heart.png (+2 troll, +2 camgirl)
taco_latte.png (+2 troll, -2 in every category)
taco_meme.png (+2 troll, +2 troll )
taco_alien.png  (+2 troll, +2 camgirl)
wine_alien.png (+2 camgirl, +2 camgirl)
wine_boob.png (+2 camgirl, +2troll )
wine_cheetos.png (+2 camgirl, +1 troll )
wine_doom.png (+2 camgirl, +2 martyr )
wine_heart.png (+2 camgirl, +2 camgirl)
wine_killman.png (+2 camgirl, +2 martyr )
wine_latte.png (+2 camgirl, -2 in every category)
wine_meme.png (+2 camgirl, +2 camgirl )
________________

Affirmations pages:

You gained followers! (bars at bottom of screen increases according to above points)

this appears as a pop up window on the page where you press post
there is a transparent layer of black behind this window to off set it from the bkg
once you press ok it goes back to the home screen/or goes on to say you lost followers as well

file path:
img/affirmations/gainedfollowers_overlay_notification.gif

You lost followers! (bars at bottom of screen decreases according to above points)

You gained followers! (bars at bottom of screen increases according to above points)
this appears as a pop up window on the page where you press post
there is a transparent layer of black behind this window to off set it from the bkg
once you press ok it goes back to the home screen

file path:
img/affirmations/lostfollowers_overlay_notification.gif




*/




// one tags object
// 48
// lena...


var tags = {}


// global score object
var score = {
	'camgirl':0,
	'martyr':0,
	'troll':0,
	
	'camgirl_max':60,
	'martyr_max':60,
	'troll_max':60
}

// ongoing score object
// keep track of scores as they develop before confirmation screen
var score = {
	'camgirl':0,
	'martyr':0,
	'troll':0
}






