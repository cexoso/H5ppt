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
        $('section[id^=page]')     
    })()


    $('#displayBoard').on('touchstart',handle.touchstartHandle)
    .on('touchmove',handle.touchmoveHandle).
    on('touchend',handle.touchendHandle);
})();