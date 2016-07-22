 $(document).ready(function(){
    $(".btn-success").on("click", function(){
      $("#textBox").fadeOut("slow");
      
      $.getJSON("http://api.icndb.com/jokes/random", function(json){
        $("#textBox").html("'" + json.value.joke + "'" + "<br> -Anonymous.").fadeIn("slow");
        
        var link =  "https://twitter.com/intent/tweet?text=" + encodeURIComponent(json.value.joke);
        
        $(".btn-info").on("click", function(){
          location.href = link;
        });
      });
    });
});