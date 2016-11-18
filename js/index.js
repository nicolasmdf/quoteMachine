 $(document).ready(function(){
    $(".btn-success").on("click", function(){
      $("#textBox").fadeTo(300, 0);
      $.getJSON("http://api.icndb.com/jokes/random", function(json){
        $("#textBox").html("'" + json.value.joke + "'" + "<br> -Anonymous.").fadeTo(1000, 1);
        
        var link =  "https://twitter.com/intent/tweet?text=" + encodeURIComponent(json.value.joke);
        
        $(".btn-info").on("click", function(){
          location.href = link;
        });
      });
    });
});