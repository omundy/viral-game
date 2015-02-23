

function display_insta_pic(){
	
}



var metube = {  
	'shock_snuff': {
		'disabled':false, // after used
		'score': { 'camgirl':0, 'martyr':0, 'troll':0 }
	},
}





//problems with this format: there are multple classes that correspond to different buttons on differen pages but they have the same coordinates
//should i create distinct classes for each button? or is there another work around

var instagram_camera_roll = {
	
	'meta': {
		'path':'img/instacam/'
	},
	'buttons': { //these are only buttons that generate images
 /* SELFIES ICONS -- put hover effects on all of these- glow & enlarge: all images in img/instacam/selfie
 
 the way this is written right now the buttons correspond to points. this is wrong, the image that shows up as a result of clicking on buttons should generate the points
 */
 
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
________________
BACKGROUNDS:
file path: 
img/instacam/pics/backgrounds

alien.png (+2 camgirl)
boob.png (+2 troll)
meme.png (+2 troll)
cheeto (+2 troll)
doom.png (+2 martyr)
heart.png (+2 camgirl)
latte.png (-2 in every category)
killman.png (+2 martyr)

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


var tags = {
	
	'swag': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'likes4likes': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'tbt': { 'disabled':false, 'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 } },
	'instamood': { 'disabled':false, 'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 } },
	'foreveralone': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'poop': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'selfie': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'lol': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'nofilter': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'ftw': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'killmankind': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'wcw': { 'disabled':false, 'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 } },
	'blessed': { 'disabled':false, 'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 } },
	'epicwin': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'turnt': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'virgin': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'plur': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'problematic': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'nohomo': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'yesallwomen': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'slutshaming': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'trashy': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'gamergate': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'thatswhatslutsdo': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'pussypower': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'racist': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'smd': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'buchdick': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'downwardspiral': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'naturalselection': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'nipslip': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'2hot4u': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'comeatmebro': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':0, 'troll':1 } },
	'witch': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'basic': { 'disabled':false, 'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 } },
	'wrath': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'rip': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'supremebeing': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'twinsies': { 'disabled':false, 'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 } },
	'gotbitches': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'fml': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'killme': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'hotbish': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'mytwistedworld': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'gunsout': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'proana': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'rage': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'bowdown': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'wetnwild': { 'disabled':false, 'score': { 'camgirl':1, 'martyr':0, 'troll':0 } },
	'godlike': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'thinspo': { 'disabled':false, 'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 } },
	'retribution': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
	'evil': { 'disabled':false, 'score': { 'camgirl':0, 'martyr':1, 'troll':0 } },
}


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






