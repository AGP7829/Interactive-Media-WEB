//var text= "";
//var userType = $(":text");
//console.log(userType.toLowerCase())

/*$(":text").val (function(){
	return this.html.toLowerCase();
})*/


/*$(document).keydown(function(ourData){

	console.log(ourData.keyCode)

	text=text+ourData.key.toLowerCase()
		

		$(":text").html(text)
		checkWords(text)

		if (ourData.keyCode){}

})*/

/*function checkWords(word){
		
		if (text == "black") {
			//you can do whatever you want here
			$("body").css({"background":"black"})
			text="";

		} else if (text == "white"){
			$("body").css({"background":"white"})
			text="";

		} else if (text == "yellow"){
				$("body").css({"background":"gold"})
			text="";
		
		} else if (text == "refresh"){
			location.reload();
		
	}}*/


$(":text").keyup(function checkWords(word){

		//this var helps makes the if condition accept uppercase
		var search = $(":text").val().toLowerCase();


		if (search == "black") {
			//you can do whatever you want here
			$("body").css({"background":"black"})
			$(this).val("");
			

		} else if (search == "white"){
			$("body").css({"background":"white"})
			$(this).val("");

		} else if (search == "red"){
			$("body").css({"background":"crimson"})
			$(this).val("");

		} else if (search == "orange"){
			$("body").css({"background":"orange"})
			$(this).val("");

		} else if (search == "yellow"){
			$("body").css({"background":"gold"})
			$(this).val("");

		} else if (search == "green"){
			$("body").css({"background":"green"})
			$(this).val("");

		} else if (search == "blue"){
			$("body").css({"background":"#0051d6"})
			$(this).val("");

		} else if (search == "purple"){
			$("body").css({"background":"purple"})
			$(this).val("");

		} else if (search == "magenta"){
			$("body").css({"background":search})
			$(this).val("");

		} else if (search == "refresh"){
			location.reload();

		} else if (search == "new tab"){
			var newTab=window.open("www.google.com", "_blank");
			newTab.focus();
		
		} else if (search == "haha"){
			$(this).val("");
			alert("What's so funny?");
		
		} else if (search == "stop"){
			$("body").css({"background":"crimson"});
			$(this).val("STOP");
			$(":text").css({"color":"white"});
		}

		
	})