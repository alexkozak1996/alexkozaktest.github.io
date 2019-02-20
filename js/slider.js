$(document).ready(function () {

var timeList = 300;
var TimeView = 4000;
var RadioBut = true;

$('.slide').hide().eq(0).show();
var slideNum = 0;
var slideTime;
slideCount = $("#slider .slide").length;

var animSlide = function(arrow){
    clearTimeout(slideTime); 
        
    function slideDirectionHide(slideFloatNum, directTo){
            $('.slide').eq(slideFloatNum).fadeOut(timeList); 
    }

    function slideDirectionShow(slideFloatNum, directTo, pause){
            $('.slide').eq(slideFloatNum).fadeIn(timeList, function() {
                if(pause == true) { rotator(); }
            }); 
    }
    
    var old_slideNum = slideNum;
        
    if(arrow == "next"){
            slideDirectionHide(slideNum, "left");
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
            slideDirectionShow(slideNum, "right", true);
            }
    else if(arrow == "prew")
    {
            slideDirectionHide(slideNum, "right");
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
            slideDirectionShow(slideNum, "left", true);
    }else{
                if(arrow !== old_slideNum)
                { 
                    if(arrow > old_slideNum)
                    {
                        slideDirectionHide(slideNum, "left");
                        slideNum = arrow;
                        slideDirectionShow(slideNum, "right", true);
                    }else if(arrow < old_slideNum) {
                        slideDirectionHide(slideNum, "right");
                        slideNum = arrow;
                        slideDirectionShow(slideNum, "left", true);
                    }

                }
    }

}
    if(RadioBut){
    var linkArrow = $('<button class="prev" href="#">&lt;</button><button class="next" href="#">&gt;</button>')
        .prependTo('#slider');
        $('.next').click(function(){
           animSlide("next");
           return false;
           })
        $('.prev').click(function(){
           animSlide("prev");
           return false;
           })
    }
        var pause = false;
        var rotator = function(){
               if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
               }
        $('.slider-wrapper').hover(
           function(){clearTimeout(slideTime); pause = true;},
           function(){pause = false; rotator();
           });
        
    var clicking = false;
    var prevX;
    $('.slide').mousedown(function(e){
        clicking = true;
        prevX = e.clientX;
    });

    $('.slide').mouseup(function() {
     clicking = false;
    });

    $(document).mouseup(function(){
        clicking = false;
    });

    $('.slide').mousemove(function(e){
        if(clicking == true)
         {
             if(e.clientX < prevX) { animSlide("next"); clearTimeout(slideTime); }
             if(e.clientX > prevX) { animSlide("prew"); clearTimeout(slideTime); }
           clicking = false;
        }
    });
    $('.slide').hover().css('cursor', 'pointer');
    rotator();  

});