/*var scrollToTop = (function(){
	var delta;
	var time;
	var speed;
	var deltaY;
	var id=null;
	function scrollToTop() {
		var y=window.scrollY;
		if(y>0){
			delta = delta + speed/2;
			y=y-delta;
			window.scrollTo(0,y);
		}
		else{
			clearInterval(id);
		}
	}
	var initialize = function(configration) {
		speed = configration.speed;
		time = configration.time;
		delta = speed;
		scrollElement=document.getElementById("scroll-to-top");
		scrollElement.addEventListener("click",function(){
		id=setInterval(scrollToTop,time);
		});
	};
	return initialize;
}());

*/

$("document").ready(function(){
    //var scrollBottom = $(window).scrollTop() + $(window).height() ;
    //alert("Here");
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $(".scrollUp").fadeIn("fast");
            $(".scrollDown").fadeOut("fast");
        }
        else{
            $(".scrollDown").fadeIn("fast");
            $(".scrollUp").fadeOut("fast");
        }
    });

    $(".scrollDown").click(function(){
        $("html,body").animate({
            scrollTop:500
        },800);
    });

    $(".scrollUp").click(function(){
        $("html,body").animate({
            scrollTop:0
        },800);
    });
});