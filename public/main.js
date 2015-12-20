$(".bread").fadeIn(1500)

$(".pastry3").on("click", function(){

	$("#image1").attr("src",$(this).attr("src"));
	$(".outerLightBox").fadeIn(500);

	if ($(this).attr("src") == "1.png"){
		$("#text1").text("Mini Croissant");
		$("img").show();
	}	
	else if ($(this).attr("src") == "2.png"){
		$("#text1").text("Raspberry Cream Cheese");
		$("img").show();
	}
	else if ($(this).attr("src") == "3.png"){
		$("#text1").text("Strawberry Pastry");
		$("img").show();
	} 
	else if ($(this).attr("src") == "4.png"){
		$("#text1").text("Fruit Pastry");
		$("img").show();
	} 
	else if ($(this).attr("src") == "5.png"){
		$("#text1").text("Fruit Pastry Bite");
		$("img").show();
	} 
	else if ($(this).attr("src") == "6.png"){
		$("#text1").text("Danish Cream Cheese");
		$("img").show();
	} 
	else if ($(this).attr("src") == "7.png"){
		$("#text1").text("Strawberry Soft Cake");
		$("img").show();
	} 
	else if ($(this).attr("src") == "8.png"){
		$("#text1").text("Sweet Potato Soft Cake");
		$("img").show();
	}
	else if ($(this).attr("src") == "9.png"){
		$("#text1").text("Honey Bon Delicieux");
		$("img").show();
	} 
	else if ($(this).attr("src") == "10.png"){
		$("#text1").text("Green Tea Bon Delicieux");
		$("img").show();
	} 
	else if ($(this).attr("src") == "11.png"){
		$("#text1").text("Tangerine Roll Cake");
		$("img").show();
	} 
	else if ($(this).attr("src") == "12.png"){
		$("#text1").text("Walnut Roll Cake");
		$("img").show();
	} 
});


$(".outerLightBox").on("click", function(){
	$(".outerLightBox").hide();
});