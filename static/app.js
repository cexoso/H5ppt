$(function(){
    $('#displayBoard').on('slideLeft.custom',function(){
        console.log('slideLeft');
    })
    $('#displayBoard').on('slideRight.custom',function(){
        console.log('slideRight');
    })
    $('#displayBoard').on('slideUp.custom',function(){
        console.log('slideUp');
    })
    $('#displayBoard').on('slideDown.custom',function(){
        console.log('slideDown');
    })


    for(var i=0;i<10;i++){
        (function(i){
            setTimeout(function(){
                $('#loading').css({opacity:1-i*0.1});
            }, i*50);    
        })(i);
        setTimeout(function(){
                $('#loading').hide();
        }, 500);    
    }
    
   
    $('#page2 .banner').on('click',function(){
        console.log($(this))
    })

    $('#shareBtn').on('click',function(){
        $('#share').show();
        $('#share').one('click',function(){
            $(this).hide();
        });
    })
})