;(function($){

    var slide = {      
       
        init: function(){
            this.slideFn();
        },
        slideFn:function(){
            var $slideWrap = $('#wrap .slide-wrap');
            var $slide     = $('#wrap .slide-content');
            var cnt = 0;
            var $nextBtn    =   $('#wrap .next-btn');
            var $prevBtn    =   $('#wrap .prev-btn');

            var n = $('.slide').length;
            var slideW = $('.slide').innerWidth();
            var angle = 360/n;
            var tz = 0;

            //translateZ 자동 계산하기
            //translateZ = 반응형 ((슬라이드너비/2) / tan( 3.14/슬라이드개수 ))
            tz = Math.round((slideW/2) / Math.tan(Math.PI/n));


            function mainSlideFn(){

                console.log(cnt);
                // $slide.stop().animate({opacity:.85},0);
                $slideWrap.stop().css({transform:`perspective(${tz*2}px) translateZ(${-tz}px) rotateY( ${-60*cnt}deg)`})//ECMAScript6
                // $slideWrap.stop().css({transform:'perspective(1040px) translateZ(-520px) rotateY( '+-60*cnt+'deg)'})//ECMAScript5

                // $slide.css({transform:'scale(1.0)'});

                // $slide.eq(cnt%6).stop().animate({opacity:1},1000,function(){
                //     $(this).css({transform:'scale(1.2)',transition:'all .5s'});
                // });
            }
            mainSlideFn()
            
            

            function nextSlideFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideFn(){
                cnt--;
                mainSlideFn();
            }

            $nextBtn.on({
                click:function(){
                    console.log('next');
                    nextSlideFn();
                }
            })
            $prevBtn.on({
                click:function(){
                    console.log('prev');
                    prevSlideFn();
                }
            })

        }
    }

    slide.init();

})(jQuery);