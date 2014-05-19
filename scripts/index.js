$(document).ready(function(){
	
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
		$('#content').load("home.html");
		highlightSelected($(".menu").find("#home"));
	});
	
	$(".menu").find("#photo").click( function() {
		$('#content').load("photography.html");
		highlightSelected($(".menu").find("#photo"));
	});

	$(".menu").find("#design").click( function() {
		$('#content').load("design.html");
		highlightSelected($(".menu").find("#design"));	
	});
	
	$(".menu").find("#prog").click( function() {
		$('#content').load("prog.html");	
		highlightSelected($(".menu").find("#prog"));
	});
	
	$(".menu").find("#contact").click( function() {
		$('#content').load("contact.html");	
		highlightSelected($(".menu").find("#contact"));
	});
	
	//----------------galleriffic gallery-------------------
	
	

});
