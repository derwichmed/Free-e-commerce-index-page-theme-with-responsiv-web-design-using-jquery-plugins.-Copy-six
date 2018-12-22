$(function (){
    /**
     * $(this).find('+ .content').animate({
                width: '260px'
            }, 500);
     */
    navBarHeight = $('.nav_bar').height();
    isNavBarHidden = true;
    $('.side_bare_window').click(function (){
        if(isNavBarHidden){
            $(this).attr('src','img/Close-Windows-2.png');
            $('.nav_bar').css('height','0px');
            $('.nav_bar').show();
            $('.nav_bar').animate({
                height: navBarHeight
            }, 500);
            isNavBarHidden = false;
        } 
        else{
             $(this).attr('src','img/menu_icon.png');
             $('.nav_bar').animate({
                height: '0px'
             }, 500,function (){
                $('.nav_bar').hide();
             });
             isNavBarHidden = true;
        }
    });
});