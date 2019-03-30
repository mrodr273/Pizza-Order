function Order() {
  this.pizza = [];
  this.sides= [];
  this.drinks= [];
  this.dessert = [];
}
function PizzaOrder(size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}
function SidesOrder(boneless, wings, parmesan, cheesy, ceasars, garden) {
  this.boneless = boneless;
  this.wings = wings;
  this.parmesan = parmesan;
  this.cheesy = cheesy;
  this.ceasars = ceasars;
  this.garden = garden;
}
function DrinksOrder(coke, diet, sugar, fanta, sprite, water) {
  this.coke = coke;
  this.diet = diet;
  this.sugar = sugar;
  this.fanta = fanta;
  this.sprite = sprite;
  this.water = water;
}
function DessertOrder(brownie, cinnamon, lava) {
  this.brownie = brownie;
  this.cinnamon = cinnamon;
  this.lava = lava;
}
PizzaOrder.prototype.costOrder = function () {
  if (this.toppings.length > 1) {
    return this.size * 1.2 + (this.toppings.length - 1)
  } else {
    return this.size * 1.2;
  }
}
SidesOrder.prototype.costSides = function () {
  return this.boneless * 7 + this.wings * 6 + this.parmesan * 4 + this.cheesy * 4 + this.ceasars * 5 + this.garden * 5;
}
DrinksOrder.prototype.costDrinks = function () {
  return this.water * 1 + (this.coke + this.diet + this.sugar + this.fanta + this.sprite) * 1.5;
}
DessertOrder.prototype.costDessert = function () {
  return this.brownie * 5 + (this.cinnamon + this.lava) * 4;
}
// need to confirm that it works
Order.prototype.totalCost = function () {
  return this.pizza.costOrder();
}
Order.prototype.addPizzaToOrder = function (newPizza) {
  this.pizza.push(newPizza);
}
Order.prototype.addSidesToOrder = function (newSides) {
  this.sides.push(newSides);
}
Order.prototype.addDrinksToOrder = function (newDrinks) {
  this.drinks.push(newDrinks);
}
Order.prototype.addDessertToOrder =  function (newDessert) {
  this.dessert.push(newDessert);
}
// Document ready
$(document).ready(function(){
  var newOrder = new Order();
  // tabs functionality
  $("#help-btn").click(function() {
    $("#help").addClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#side-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });
  $("#pizza-btn").click(function() {
    $("#pizza-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#side-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });
  $("#side-btn").click(function() {
    $("#side-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });
  $("#drink-btn").click(function() {
    $("#drink-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#side-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });
  $("#dessert-btn").click(function() {
    $("#dessert-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#side-form").removeClass('active show');
  });
  // Sides form
  $("#form-sides").submit(function(event) {
    event.preventDefault();
    var bonelessInput=parseInt($("input#boneless-orders").val());
    var wingsInput=parseInt($("input#wings-orders").val());
    var parmesanInput=parseInt($("input#parmesan-orders").val());
    var cheesyInput=parseInt($("input#cheesy-orders").val());
    var ceasersInput=parseInt($("input#ceasars-orders").val());
    var gardenInput=parseInt($("input#garden-orders").val());

    var newSides = new SidesOrder(bonelessInput, wingsInput, parmesanInput, cheesyInput, ceasersInput, gardenInput);
    newOrder.addSidesToOrder(newSides);
    alert(newSides.costSides())
    $("span#costSides").text(newSides.costSides());
  });

  $("#form-drinks").submit(function(event) {
    event.preventDefault();
    var cokeInput=parseInt($("input#coke-orders").val());
    var dietInput=parseInt($("input#diet-orders").val());
    var sugarInput=parseInt($("input#sugar-orders").val());
    var fantaInput=parseInt($("input#fanta-orders").val());
    var spriteInput=parseInt($("input#sprite-orders").val());
    var waterInput=parseInt($("input#water-orders").val());
    var newDrinks = new DrinksOrder(cokeInput, dietInput, sugarInput, fantaInput, spriteInput, waterInput);
    newOrder.addDrinksToOrder(newDrinks);
    alert(newDrinks.costDrinks())
    $("span#costDrinks").text(newDrinks.costDrinks());
    console.log(newDrinks.costDrinks());
  });

  $("#form-dessert").submit(function(event) {
    event.preventDefault();
    var brownieInput=parseInt($("input#brownies-orders").val());
    var cinnamonInput=parseInt($("input#cinnamon-orders").val());
    var lavaInput=parseInt($("input#lava-orders").val());
    var newDessert = new DessertOrder(brownieInput, cinnamonInput, lavaInput);
    newOrder.addDessertToOrder(newDessert);
    alert(newDessert.costDessert())
    $("span#costDessert").text(newDessert.costDessert());
    console.log(newDessert.costDessert());
  });

  $("#form-pizza").submit(function(event) {
    event.preventDefault();

    var sizeInput = parseInt($("input:radio[name=size]:checked").val());
    var crustInput = $("input:radio[name=crust]:checked").val();
    var sauceInput = $("input:radio[name=sauce]:checked").val();
    var toppingsInput = [];

    $("input:checkbox[name=toppings]:checked").each(function(){
     var toppings = $(this).val();
     toppingsInput.push(toppings);
    });

   var newPizza = new PizzaOrder(sizeInput, crustInput, sauceInput, toppingsInput);
   newOrder.addPizzaToOrder(newPizza);
   $("span#size").text(newPizza.size);
   $("span#crust").text(newPizza.crust);
   $("span#sauce").text(newPizza.sauce);
   $("span#toppings").text(newPizza.toppings);
   $("span#cost").text(newPizza.costOrder());
   $("#btn-add").show();
   $("#btn-pizza").hide();
   $("#btn-pizza").show();
   window.location = 'Pizza-Order.html#jumpHere';
  });
  // display total cost
  // $("#btn-total").click(function() {
  //   $("span#totalCost").text(newOrder.totalCost());
  //   alert(newOrder.totalCost())
  // });
  console.log(newOrder);

});
