

function display_insta_pic(){
	
}






var instagram_camera_roll = {
	
	'meta': {
		'path':'instacam/cameraroll/'
	},
	'buttons': {

		'dikpic': { // css class
			'locked':true, // on beginning
			'disabled':false, // after used
			// what is shown
			'display':'img', 
			'btn_img': 'dikpic_btn.jpg',
			'btn_img_locked': 'dikpic_btn_locked.jpg',
			'btn_img_disabled': 'dikpic_btn_disabled.jpg',
			'btn_clicked':display_insta_pic('dikpic.jpg'),
			// how the score is tallied
			'score': { 'camgirl':0, 'martyr':1, 'troll':0 }
		},
		'lilb': {
			'locked':true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'lilb_btn.jpg',
			'btn_img_locked': 'lilb_btn_locked.jpg',
			'btn_img_disabled': 'lilb_btn_disabled.jpg',
			'btn_clicked':display_insta_pic('lilb.jpg'),
			'score': { 'camgirl':0, 'martyr':0, 'troll':1 }
		},
		'nails': {
			'locked':true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'nails_btn.jpg',
			'btn_img_locked': 'nails_btn_locked.jpg',
			'btn_img_disabled': 'nails_btn_disabled.jpg',
			'btn_clicked':display_insta_pic('nails.jpg'),
			'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 }
		},
		'nude': {
			'locked':true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'nude_btn.jpg',
			'btn_img_locked': 'nude_btn_locked.jpg',
			'btn_img_disabled': 'nude_btn_disabled.jpg',
			'btn_clicked':display_insta_pic('nude.jpg'),
			'score': { 'camgirl':1, 'martyr':0, 'troll':0 }
		},
		
		
		// lena...
		
		
		
	/*

scenequeen.jpg (+1 camgirl)
weenie.jpg (+1 troll)
fedora.jpg (+1 troll)
arsenal.jpg (+1 martyr)
dylan.jpg (+1 martyr)
cats.jpg (+1 Camgirl)
moloshe2.jpg (+1 camgirl)
moloshe1.jpg (+1 troll)
	*/
	
	
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






