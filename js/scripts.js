$(document).ready(function(){
  $("#number-form").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("#number").val());
    var product = 1;
    for(var i = numberInput; i >= 1; i --) {
      product *= i;
    }
    $(".output").text(product);
  });
});
