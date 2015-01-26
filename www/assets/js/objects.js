

function display_insta_pic(){
	
}






var instagram_camera_roll = {
	
	'meta': {
		'path':'instacam/cameraroll/'
	},
	'buttons': {

		'dikpic': {
			'locked':true, // on beginning
			'disabled':false, // after used
			// what is shown
			'display':'img', 
			'btn_img': 'dikpic_btn.jpg',
			'btn_img_locked': 'dikpic_btn_locked.jpg',
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
			'btn_clicked':display_insta_pic('lilb.jpg'),
			'score': { 'camgirl':0, 'martyr':0, 'troll':1 }
		},
		'nails': {
			'locked':true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'nails_btn.jpg',
			'btn_img_locked': 'nails_btn_locked.jpg',
			'btn_clicked':display_insta_pic('nails.jpg'),
			'score': { 'camgirl':-1, 'martyr':-1, 'troll':-1 }
		},
		'nude': {
			'locked':true,
			'disabled':false,
			'display':'img', 
			'btn_img': 'nude_btn.jpg',
			'btn_img_locked': 'nude_btn_locked.jpg',
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






