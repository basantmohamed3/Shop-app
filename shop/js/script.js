
var scrollBtn = $("#topBtn");

$(window).scroll(function()
{

if ($(this).scrollTop()>=350)
{
	scrollBtn.fadeIn("slow", function(){

	});
}
else {
	scrollBtn.fadeOut("slow", function(){

	});

}

scrollBtn.click (function(){
	$("html,body").animate({scrollTop:0}, 600);

});

});

//--------Cart



var unitPrice =document.getElementsByClassName(".unit-price");
var totalPrice = document.getElementsByClassName('.total-price');


console.log(unitPrice);

var checkBoxCart=$("input[type='checkbox");
var updatedBtn =$(".updated");
var continueBtn =$(".continue");
var checkoutBtn =$(".checkout");


$(updatedBtn).on("click", function(){

if($(checkBoxCart).checked=true) {
	alert("hi");
	//$(checkboxCart).parents("tr").fadeOut(500, function(){
	//	$(this).remove();

}
});
	
     
	
//if(keycode.which ==13) {

//	
//	})


///})
//});



//on("click", function(event){
//	$(this).parents("tr").fadeOut(500, function(){
	//	$(this).remove();
//	})
	//event.stopPropagation();

//})










//var addToCart = $("#add-to-cart");

//$(addToCart).on("click", function(){
	
//












