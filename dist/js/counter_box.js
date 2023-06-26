var text = $('#counterText');
var count = 0;
$('#addButton').on('click', function(){
    if(count<50){
        count++;
        text.text(count)
    } 
});

$('#removeButton').on('click', function(){
    if(count>0){
        count--;
        text.text(count)
    } 
});

$('#buyButton').on('click', function(){
    count = 0;
    
});

