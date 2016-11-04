//diner object - name of diner, list of the dishes the diner ate with cost of dish
//method to add total of the dishes : totalDishesCost
//method to calculate tax for the diner : ((totalDishesCost * tax percentage) = dishesTax)  + totalDishesCost = dinerTotalBeforeTip -- 
        //store cost into array (eg individualBills = { diner : dinerTotalBeforeTip } ) (individualBills.reduce)
//method to calculate tip for the diner : (dinerTotalBeforeTip * tip percentage) = dinerTip -- store tip amounts into an array
//constructor functions
function Diner(name, dishes) {
    this.name = name,
    this.dishes = dishes
};
function Bill(diners) {
    this.diners = diners
};
//Diner protoype methods
Diner.prototype.sumDishCost = function() {
    var totalDishesCost = 0;
    for (var dish in this.dishes) {
        if (this.dishes.hasOwnProperty(dish)) {
            totalDishesCost+= parseFloat(this.dishes[dish]);
        }
    }
    return totalDishesCost;
};
Diner.prototype.calculateTax = function() {
    var tax = 0.0625;
    var totalTax = tax * this.sumDishCost();
    return totalTax;
};
Diner.prototype.calculateTip = function() {
    var tip = 0.15;
    var totalTip = (this.sumDishCost() + this.calculateTax()) * tip;
    return totalTip;
};
Diner.prototype.calculateTotalMealCost = function() {
    var totalMealCost = (this.sumDishCost() + this.calculateTax() + this.calculateTip());
    return totalMealCost;
};
Bill.prototype.totalAllDinersCost = function() {
    var totalDinersCosts = 0;
    for (var diner in this.diners) {
        totalDinersCosts += parseFloat(this.diners[diner].calculateTotalMealCost());
    }
    return totalDinersCosts;
};
Bill.prototype.totalAllDinersTips = function() {
    var totalDinersTips = 0;
    for (var diner in this.diners) {
        totalDinersTips += parseFloat(this.diners[diner].calculateTip());
    }
    return totalDinersTips;
};
Bill.prototype.printDinerBreakdown = function() {
    for (var diner in this.diners) {
        console.log(this.diners[diner].name + ", " + this.diners[diner].sumDishCost() + ", " + this.diners[diner].calculateTax() + ", " + this.diners[diner].calculateTip());
        }
    }


//testing
var georgeDishes = {friedCalamari : 12.50, chickenParm : 13.99};
var betsyDishes = {gardenSalad : 4.99, bakedZiti : 10.99};
var matildaDishes = {friedCalamari : 12.50, filetMignon : 28.99};
var george = new Diner("George", georgeDishes);
var betsy = new Diner("Betsy", betsyDishes);
var matilda = new Diner("Matilda", matildaDishes);
var newBill = new Bill([george, betsy, matilda]);
