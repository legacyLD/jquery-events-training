console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("span").on("click", function printChoice () {
        var choiceText = $(this).text()
        var dNow = new Date();
        var time = (dNow.getMonth()+1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
        $('ul').append("<li>"+choiceText+time+"</li>");
    });
})
 
