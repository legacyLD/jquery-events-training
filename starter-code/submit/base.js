console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";
    $("#time").text( Date.now() );
    function stop (event) {
      event.preventDefault();
    }
    function embed () {
      $('body').append("<p>"+rick_roll_youtube_embed_code+"</p");
    }
    $('form').on("submit", stop);
    $('form').on("submit", embed);
  })
