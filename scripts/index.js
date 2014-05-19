$(document).ready(function(){
	

	//-------------------menu animation-------------------
 
 	$(".menu").find("li").mouseenter( function() {
 		$(this).addClass("highlight");
	});

	$(".menu").find("li").mouseleave( function() {
 		$(this).removeClass("highlight");
	});
	
	$(".menu").find("li").click(function(){
		var id = $(this).attr("id");
		$(this).addClass("highlight2");
  		//alert(id);
	});


	//-------------------loading content-------------------
	
	$(".menu").find("#home").click( function() {
		$('#content').load("home.html");
	});
	
	$(".menu").find("#photo").click( function() {
		$('#content').load("photography.html");	
	});

	$(".menu").find("#design").click( function() {
		$('#content').load("design.html");	
	});
	
	$(".menu").find("#prog").click( function() {
		$('#content').load("prog.html");	
	});
	
	$(".menu").find("#contact").click( function() {
		$('#content').load("contact.html");	
	});
	
	//----------------galleriffic gallery-------------------
	
	

});
