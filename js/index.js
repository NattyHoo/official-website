/****************************************************************
 *																*		
 * 						      素材火							*
 *                        www.sucaihuo.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/

window.onload = function(){
    var arrLocation = window.location.href.split('/');
    var activeName = '';
    activeName = arrLocation[arrLocation.length - 1];
    if(activeName == 'about.html' || activeName == 'feedback.html'){}else{ activeName = arrLocation[arrLocation.length - 2]; }
    switch(activeName){
        case 'product': 
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'product'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'support':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'support'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'news':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'news'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'about.html':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'about.html'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'feedback.html':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'feedback.html'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        default: 
            $('.ul li').eq(0).addClass('active').siblings('li').removeClass('active'); break;
    }
    
    var flag = true;
    $('header .nav').click(function(){
        if(flag){
            flag = false;
            $('header .nav span').eq(0).addClass('active');
            $('header .nav span').eq(2).addClass('active');
            $('header .nav span').eq(1).hide();
            $('header .header>ul').slideDown();
        }else{
            flag = true;
            $('header .nav span').eq(0).removeClass('active');
            $('header .nav span').eq(2).removeClass('active');
            $('header .nav span').eq(1).show();          
            $('header .header>ul').slideUp();
        }
    });

    $('.header>ul>li').hover(
        function(){ $(this).find('.childUl').fadeIn(100); $(this).find('.childUl').animate({top:'80px',display:'block'},200)},
        function(){$(this).find('.childUl').animate({top:'100px',display:'none'},200); $(this).find('.childUl').fadeOut();}
    
    )

    var Bannerswiper = new Swiper('.banner',{
        loop: true,
        autoplay:true,
        pagination: {el:'.banner .swiper-pagination'},
        navigation:{
            nextEl: '.banner .swiper-button-next',
            prevEl: '.banner .swiper-button-prev'
        }
    })
    var Noticeswiper = new Swiper('.notice', {  
        loop: true,
        autoplay:true,
        direction : 'vertical',
    });
}