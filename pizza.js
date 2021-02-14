$(document).ready(function()
{
    $("form#form1").submit(pizzaOrder).submit(yourInfo);

    $("#showPizza").click(function(){
        $("div#pizza").show();
        $("div#info").hide();
        $("div#orderDetails").hide();
        $("#buttonHide").hide();
        $("#outputMessage").hide();
        $("#placeOrder").hide();
    });

    $("#showInfo").click(function(){
        $("div#pizza").hide();
        $("div#info").show();
        $("div#orderDetails").hide();
        $("#buttonHide").hide();
        $("#outputMessage").hide();
        $("#placeOrder").hide();
    });

    $("#showOrder").click(function (){
        $("div#pizza").hide();
        $("div#info").hide();
        $("div#orderDetails").show();
        $("#buttonHide").show();
        $("#outputMessage").hide();
        $("#placeOrder").show();
    });


    $("#placeOrder").click( function printOutput() {


        $("#outputMessage").show();
        $("#outputMessage").text(`Your pizza is on the way. Enjoy!`)
        $("div#orderDetails").hide();
        $("#buttonHide").hide();
        $("#placeOrder").hide();
    });
});


function yourInfo(hello)
{
    // get Address
    let firstName = $("input#fname").val();
    let lastName = $("input#lname").val();
    let address = $("input#delivery-address").val();
    let city = $("input#city").val();
    let state = $("input#state").val();
    let zipCode = $("input#zip").val();
    let phone = $("input#phone").val();

    let name = `${firstName} ${lastName}`;

    //display Address
    $("td#fullName").text(name);
    $("td#addressDisplay").text(`${address}, ${city}, ${state}, ${zipCode} `);
    $("td#phoneDisplay").text(phone);

    hello.preventDefault();
}

function pizzaOrder(events)
{

    // get size of pizza
    let size = $("input[name=size]:checked").data("pizza-price");

    // get size name of the pizza
    let sizeName = $("input[name=size]:checked").data("name");

    let crust = $("input[name=crust]:checked").data("name");

    let meat = $("input[name=meat]:checked");
    let meatTotal = 0;

    let veggie = $("input[name=veggie]:checked");
    let veggieTotal = 0;

    let toppingNames = "";

    // function to add the checkbox values
    meat.each(function ()
    {
        meatTotal += parseFloat($(this).data("meat-price"));
        toppingNames += $(this).val();
        toppingNames += ", ";

    });

    veggie.each(function () {
       veggieTotal += $(this).data("veggie-price");
        toppingNames += $(this).val();
        toppingNames += ", ";
    });

    let pizzaTotal = size + veggieTotal + meatTotal;

    let taxValue = .051;

    let tax = taxValue * pizzaTotal;

    let deliveryFee = 2.00;

    let totalPrice = pizzaTotal + tax + deliveryFee;
//Display pizza details and Total
    $("td#sizeDisplay").text(sizeName);
    $("td#crustName").text(crust);
    $("td#toppingsDisplay").html(toppingNames);
    $("td#subTotal").text(`$${pizzaTotal.toFixed(2)}`);
    $("td#taxPercent").text(`5.1%`)
    $("td#taxFee").text(`$${tax.toFixed(2)}`);
    $("td#deliveryCharges").text(`$${deliveryFee.toFixed(2)}`);
    $("td#grandTotal").text(`$${totalPrice.toFixed(2)}`);

    events.preventDefault();



}

