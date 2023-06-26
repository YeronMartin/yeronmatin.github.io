$(document).ready(function(){
    var owlNav = $('.otherProduts_carousel').find('.owl-nav');
    var owlCarousel = $('.otherProduts_carousel');
    var owlCarouselHeight = $('.otherProduts_carousel').find('.owl-stage-outer');

    var owlNext = $('.otherProduts_carousel').find('.owl-next');
    var owlPrev = $('.otherProduts_carousel').find('.owl-prev');
    var XoFfset = - ($( window ).width() - owlCarousel[0].scrollWidth) ;
    XoFfset =  XoFfset/2;
    XoFfset = XoFfset +  owlNext[0].scrollWidth/2;
    

    owlNav.css({
        margin: "0",
        top: ''+( owlCarouselHeight[0].scrollHeight/2 - owlNav[0].scrollHeight/2 -20)+"px"
    });
    $('.owl-next').css({
        position: 'absolute',
        right: XoFfset +'px',
        'transform' : 'translate(' + -50 +'% , ' + 0 + '%)',
        background: 'none'
    });
    $('.owl-prev').css({ 
        position: 'absolute',
        left: XoFfset +'px',
        'transform' : 'translate(' + -50 +'% , ' + 0 + '%)',
        background: 'none'

    });

    $( window ).resize(function(){
        XoFfset = - ($( window ).width() - owlCarousel[0].scrollWidth) ;
        XoFfset =  XoFfset/2;
        XoFfset = XoFfset +  owlNext[0].scrollWidth/2;

        owlNext.css({
            right: XoFfset +'px',
            'transform' : 'translate(' + -50 +'% , ' + 0 + '%)'

        });
        owlPrev.css({ 
            left: XoFfset +'px',
            'transform' : 'translate(' + -50 +'% , ' + 0 + '%)'
        });
    });

});