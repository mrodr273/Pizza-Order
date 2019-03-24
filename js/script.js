function PizzaOrder(size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}
PizzaOrder.prototype.costOrder = function () {
  if (this.toppings.length > 1) {
    return this.size * 1.2 + (this.toppings.length - 1)
  } else {
    return this.size * 1.2;
  }
}
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var sizeInput = parseInt($("input:radio[name=size]:checked").val());
    var crustInput = $("input:radio[name=crust]:checked").val();
    var sauceInput = $("input:radio[name=sauce]:checked").val();
    var toppingsInput = [];

    $("input:checkbox[name=toppings]:checked").each(function(){
     var toppings = $(this).val();
     toppingsInput.push(toppings);
   });

   var newOrder = new PizzaOrder(sizeInput, crustInput, sauceInput, toppingsInput);

   $("span#size").text(newOrder.size);
   $("span#crust").text(newOrder.crust);
   $("span#sauce").text(newOrder.sauce);
   $("span#toppings").text(newOrder.toppings);
   $("span#cost").text(newOrder.costOrder());
  });
});
