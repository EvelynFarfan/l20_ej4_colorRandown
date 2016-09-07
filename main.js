window.addEventListener("load", function() {
  var boton = document.getElementById("calcular");
  boton.addEventListener("click", function() {

    var segundos = parseFloat(document.getElementById("segundos").value);

    setInterval(function(colorRandown){document.body.style.backgroundColor = //color//
    	'#'+Math.floor(Math.random()*16777215).toString(16);}
    , segundos*1000);
  });

  // function colorRandown(){
  // 	'#'+Math.floor(Math.random()*16777215).toString(16);
  // }

});
