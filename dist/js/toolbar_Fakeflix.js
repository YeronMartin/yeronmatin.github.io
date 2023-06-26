//SECTIONS
var currentSection =""; 

//BUTTONS
var currentButton = "";

var homeButton = $('.homeButton');
var searchButton = $('.searchButton');
var comingButton = $('.comingButton');
var downloadButton = $('.downloadButton');
var moreButton = $('.moreButton');

//Start behaviour
selectButton(homeButton);
currentButton = '.homeButton';
currentSection =".HomeSection";

//Functions
function selectButton(button) {
    button.find('p').css({
        color: 'white'
    });
    button.find('img').css({
        filter: 'brightness(100%)'
    });
    return  this;

  }

  function deselectButton (button){
    button.find('p').css({
        color: '#767676'
    });
    button.find('img').css({
        filter: 'brightness(50%)'
    });
    return  this;
  }

  function displayNone (currentSec){
    currentSec.css({
        display: 'none'
    });
    return this;
  }

  function displayBlock (currentSec){
    currentSec.css({
        display: 'block'
    });
    return this;
  }

//Asign fuunctions to buttons
homeButton.on('click', function(){
    selectButton(homeButton);
    deselectButton($(""+currentButton));
    displayNone($(""+currentSection));
    currentButton =  '.homeButton';
    currentSection = ".HomeSection";
    displayBlock($(""+currentSection));
});

searchButton.on('click', function(){
    selectButton(searchButton);
    deselectButton($(""+currentButton));
    displayNone($(""+currentSection));
    currentButton =  '.searchButton';
    currentSection = ".SearchSection";
    displayBlock($(""+currentSection));
   
});

comingButton.on('click', function(){
    selectButton(comingButton);
    deselectButton($(""+currentButton));
    displayNone($(""+currentSection));
    currentButton =  '.comingButton';
    currentSection = ".ComingSection";
    displayBlock($(""+currentSection));
});

downloadButton.on('click', function(){
    selectButton(downloadButton);
    deselectButton($(""+currentButton));
    displayNone($(""+currentSection));
    currentButton =  '.downloadButton';
    currentSection = ".DownloadSection";
    displayBlock($(""+currentSection));
});

moreButton.on('click', function(){
    selectButton(moreButton);
    deselectButton($(""+currentButton));
    displayNone($(""+currentSection));
    currentButton =  '.moreButton';
    currentSection = ".MoreSection";
    displayBlock($(""+currentSection));

});