(function(){
    var handle=(function(){
        var start_x=0,
                start_y=0,
                end_x=0,
                end_y=0,
                threshold_x=30,
                threshold_y=30;
        function touchstartHandle(e){
            end_x=start_x=e.touches[0].pageX;
            end_y=start_y=e.touches[0].pageY;
        }
        function touchmoveHandle(e){
            if(e.touches.length!=1){
               return;
            }
            end_x=e.touches[0].pageX;
            end_y=e.touches[0].pageY;
            e.preventDefault();
        }
        function touchendHandle(e){
            if(start_x-end_x>threshold_x){
               $('#displayBoard').trigger('slideLeft');    
            }
            if(end_x-start_x>threshold_x){
               $('#displayBoard').trigger('slideRight');       
            }
            if(start_y-end_y>threshold_y){
               $('#displayBoard').trigger('slideUp');    
            }
            if(end_y-start_y>threshold_y){
               $('#displayBoard').trigger('slideDown');       
            }
        }
        return {
            touchstartHandle:touchstartHandle,
            touchmoveHandle:touchmoveHandle,
            touchendHandle:touchendHandle
        }
    })();    

    (function(){
        var board=$('#displayBoard');
        var current=1;
        var pageLength=$('section[id^=page]').length;
        function slideDownHandle(){
            if(current>1){
                current--;
                // 更新当前页class
                $('section[id^=page].currentPage').removeClass('currentPage');
                $('section#page'+current).addClass('currentPage');
                board.css({top:'-'+(current-1)*100+'%'});
            }
        }
        function slideUpHandle(){
            if(current<pageLength){
                current++;
                // 更新当前页class
                $('section[id^=page].currentPage').removeClass('currentPage');
                $('section#page'+current).addClass('currentPage');
                board.css({top:'-'+(current-1)*100+'%'});
            }
        }
        board.on('slideUp.sys',slideUpHandle)
        .on('slideDown.sys',slideDownHandle);
    })()


    $('#displayBoard').on('touchstart',handle.touchstartHandle)
    .on('touchmove',handle.touchmoveHandle).
    on('touchend',handle.touchendHandle);
})();

$(function(){
    setTimeout(function(){
        //不用setTimeout chrome居然不支持首次currentPage动画
        $('section#page1').addClass('currentPage');
    },0);
})