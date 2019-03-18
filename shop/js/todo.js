

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");


})

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();                       // this el tanya ta3od 3la el parent
	})
	event.stopPropagation();
})

$("input[type='text'").keypress(function(event){
	if(event.which ===13){
		
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class= 'fas fa-trash-alt'></i> </span>" +newTodo + "</li>");
	}

})

$(".fas").on("click", function(){
	$("input[type='text'").fadeToggle();
})



var productData = {
	price: 25,
	numbers: 5,
	name: "laptob"
};
var string = sessionStorage.setItem("productOne", JSON.stringify(productData));
console.log(sessionStorage.getItem('productOne'));

var returnObject = JSON.parse(sessionStorage.getItem('productOne'));

console.log(returnObject)

