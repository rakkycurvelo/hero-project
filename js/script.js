$(document).ready(function(){
	$(".carousel").slick({
		autoplay:true,
		autoplaySpeed:2000,
		dots:false,
		arrows:true,
		fade:true
	})
});

$( document ).ready(function() {

$( ".cross" ).hide();
$( ".navhome" ).hide();
$( ".hamburger" ).click(function() {
$( ".navhome" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".navhome" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});


$( document ).ready(function() {

$( ".crossO" ).hide();
$( ".navothers" ).hide();
$( ".hamburgerO" ).click(function() {
$( ".navothers" ).slideToggle( "slow", function() {
$( ".hamburgerO" ).hide();
$( ".crossO" ).show();
});
});

$( ".crossO" ).click(function() {
$( ".navothers" ).slideToggle( "slow", function() {
$( ".crossO" ).hide();
$( ".hamburgerO" ).show();
});
});

});



