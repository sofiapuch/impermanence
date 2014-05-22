$(document).ready(function(){
	
	document.oncontextmenu = function(){return false}
	
	function removeHash () { 
    	history.pushState("", document.title, window.location.pathname+ window.location.search);
	};
	
	//-------------------my functions-----------------------
	
	function highlightSelected(e) {
		$('.highlighted').removeClass("highlighted");
		e.addClass("highlighted");
	};
	


	//-------------------menu interaction-------------------
 
 	$(".menu").find("li").mouseenter( function() {
 		$(this).addClass("highlight");
	});

	$(".menu").find("li").mouseleave( function() {
 		$(this).removeClass("highlight");
	});
	
	//-------------------loading content-------------------
	
	$(".menu").find("#home").click( function() {
		removeHash();
		$('#content').load("home.html");
		highlightSelected($(".menu").find("#home"));
	});
	
	$(".menu").find("#photo").click( function() {
		removeHash();
		$('#content').load("photography.html");
		highlightSelected($(".menu").find("#photo"));
	});

	$(".menu").find("#design").click( function() {
		removeHash();
		$('#content').load("design.html");
		highlightSelected($(".menu").find("#design"));	
	});
	
	$(".menu").find("#prog").click( function() {
		removeHash();
		$('#content').load("prog.html");	
		highlightSelected($(".menu").find("#prog"));
	});
	
	$(".menu").find("#contact").click( function() {
		removeHash();
		$('#content').load("contact.html");	
		highlightSelected($(".menu").find("#contact"));
	});
	
	//----------------galleriffic gallery-------------------
	
	

});
