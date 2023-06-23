var cart_count = 0;
$('#buyButton').on('click', function(){
    /*cart_count += parseInt($('#counterText').text());
    $('#cartSpan').text(cart_count);
    
    cart_count = 0;*/
    cart_count = parseInt($('#counterText').text()) + parseInt($('#cartSpan').text());
    $('#cartSpan').text(cart_count);
    $('#counterText').text(0);
    
});