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
    $("#loading").hide();
   
    $('#page2 .banner').on('click',function(){
        console.log($(this))
    })
})