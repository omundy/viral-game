
var manifest_intro = [
	
	{src: "assets/img/loadingscreen.gif", id: "load_pic"},
	{src: "assets/img/montage/intro/intro_1.gif", id: "m_intro_frame"},
	{src: "assets/img/montage/intro/intro_2.gif", id: "intro_2"},
	{src: "assets/img/montage/intro/intro_3.gif", id: "intro_3"},
	{src: "assets/img/montage/intro/intro_4.gif", id: "intro_4"},
	{src: "assets/img/montage/intro/intro_5.gif", id: "intro_5"},
	{src: "assets/img/montage/intro/intro_6.gif", id: "intro_6"},
	{src: "assets/img/montage/intro/intro_7.gif", id: "intro_7"},
	{src: "assets/img/montage/intro/intro_8.gif", id: "intro_8"},
	{src: "assets/img/montage/intro/intro_9.gif", id: "intro_9"},
	{src: "assets/img/montage/intro/intro_10.gif", id: "intro_10"},
	{src: "assets/img/montage/intro/intro_11.gif", id: "intro_11"},
	{src: "assets/img/montage/intro/intro_12.gif", id: "intro_12"},
	{src: "assets/img/montage/intro/intro_13.gif", id: "intro_13"},
	{src: "assets/img/montage/intro/intro_14.gif", id: "intro_14"},
	{src: "assets/img/montage/intro/intro_15.gif", id: "intro_15"},
	{src: "assets/img/montage/intro/intro_16.gif", id: "intro_16"},
	{src: "assets/img/montage/intro/intro_17.gif", id: "intro_17"},
	{src: "assets/img/montage/intro/intro_18.gif", id: "intro_18"}
];


function preload_manifest(manifest,message,callback) {
	
	// = "assets/img/metube/videos/dogfriend.mp4"
	//var manifest = {id:"image", src:"assets/img/montage/intro/intro_1.gif"}
	//queue.loadFile(manifest);
	
	// show load pic
	$('#load_progress').show();

	// create a new queue
	var queue = new createjs.LoadQueue(true);
	// file(s) to load	
	queue.loadManifest(manifest, true, "");	
	// handle progress	
	queue.on("progress", handleProgress);		
	// handle completion of single file
	queue.on("fileload", handleFileLoad, this); 
	// handle completion of entire queue
	queue.on("complete", function(){ handleComplete(callback) }, this); 
	// start loading
	queue.load(); 
}
function handleProgress(event) {
	console.log("progress: "+ event.loaded)
	// adjust preload bar
	$('#load_bar').css('width', event.loaded*100 +'%');
}
function handleFileLoad(event) {
	console.log("load complete for: "+ event.item.id)
	// place file
	$('#'+ event.item.id).append(event.result);
}
function handleComplete(callback) {
	console.log("QUEUE COMPLETE: "+ callback)
	
	// remove load pic
	$('#load_progress').hide();
	
	// execute callback
	window[callback]();
}

var current_preload = '';


// PRELOAD: INTRO
preload_manifest(manifest_intro,"loading intro!","intro_callback")
function intro_callback(){ montage_window('m_intro','m_intro_frame') }








