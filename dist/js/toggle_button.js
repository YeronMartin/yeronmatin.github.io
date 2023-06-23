var button = $('.navbar-toggler');
var isRotated = false
button.on('click', function(){
    if(isRotated){
        button.css({
            transform: 'rotate(' + 0 + 'deg)'
        });
    }
    else{
        button.css({
            transform: 'rotate(' + 90 + 'deg)'
        });
    }
    isRotated = ! isRotated;
    console.log("ROTATE" + isRotated);
});