/*setInterval("scaryWords()", 3000);

function scaryWords() {
var mess = new Array('FOCUS','THIS IS A TEST','SLEEP 1.5');
var max = mess.length;
var num = Math.floor((Math.random() * max));
document.writeln(mess[num]);
}*/

$(function(){
  $('.voila').hide();
});

$(function(){
  $('div').mouseenter(function(){
    $('.voila').show();
    $('#spill').append("THIS IS A TEST.The mountains are calling and I must go. total abstinence<br> from all flesh foods    actually, I'm in really bad shape financially  A raw blink on Hari-Kari Rock. I need scissors! 61! Sleep 1.5.");
    $('#spill').prepend("Sleep 1.5      take deep   breaths           Sleep 1.5 Sleep 1.5 Tears are in your eyes");
    $('div').css("background-color", "red");
  });
});

$(function() {
  $(document).keypress(function(){
    $('#hidden').css("background-image","none");
    $('p').append("A boring conclusion.");
  });
}); 


