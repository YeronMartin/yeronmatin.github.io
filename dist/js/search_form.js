$(".searchForm").find('input').focus(function(){
   $(".searchForm").find('img').css({
        left:'10px',
        transform: 'translate(0%, -50%)'
   });

   $(".searchForm").find('input').css({
        'text-align':'justify',
        padding: '0px 0px 0px 45px'
    });
   
  });

  $(".searchForm").find('input').focusout(function(){
    $(".searchForm").find('img').css({
         left:'inherit',
         transform: 'translate(-150%, -50%)'
    });

    $(".searchForm").find('input').css({
        'text-align':'center',
        padding: '0px 0px 0px 10px'
    });
   
   });