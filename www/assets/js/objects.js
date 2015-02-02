

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
	
	SELFIES (PAIRED WITH BACKGROUNDS)

sbhb.png (basic, -2 in every category)
sbhd.png (-1 in every category, +1 cam girl)
sbhm.png (-1 in every category, +1 martyr)
sbht.png (-1 every category, +1 troll)
sdhb.png (-1 every category, +1 camgirl)
sdhd.png (+2 camgirl)
sdhm.png (+1 camgirl +1 martyr)
sdht.png (+1 camgirl +1 troll)
smhb.png (-1 every category, +1 martyr)
smhd.png (+1 camgirl, +1 martyr)
smhm.png (+2 martyr)
smht.png (+1 troll, +1 martyr)
sthd.png (+1 troll, +1 camgirl)
sthm.png (+1troll, +1 martyr)
stht.png (+1troll, +1 troll)
sthb.png (+1troll, -1 every category)

______________
FOODIES (PAIRED WITH BACKGROUNDS)

bagelbites.png (+1 troll)
smoothlie.png (+1 camgirl)
spaghetti.png (+1 martyr)
steak.png (+1 martyr)
starbucks.png (-1 every category)
sushi.png (+1 camgirl)
tacobell.png (+1 troll)
wine.png (+1 camgirl)
________________
BACKGROUNDS
alienpizza.png (+1 camgirl)
boobs.png (+1 troll)
cheetos.png (+1 troll)
doom.png (+1 martyr)
ericharris.png (+1martyr)
heartemoji.png (+1 camgirl)
meme.png (+1 troll)
pumpkinspice.png (-1 in every category)

Affirmations page:
You gained followers! (bar increases)
You lost followers! (bar decreases)


*/




// one tags object
// 18
// lena...
var tags = {}


// global score object
var score = {
	'camgirl':0,
	'martyr':0,
	'troll':0,
	
	'camgirl_max':50,
	'martyr_max':50,
	'troll_max':50
}

// ongoing score object
// keep track of scores as they develop before confirmation screen
var score = {
	'camgirl':0,
	'martyr':0,
	'troll':0
}






