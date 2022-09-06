$(document).ready(function(){
    $('#menu').click(function(){
        $('nav').slideToggle()
    })

    $(window).resize(function(){
        if($(this).width() > 768){
            $('nav').css('display','block')
        }else{
            $('nav').css('display','none')
        }
    })
})