$(document).ready(function() {

	main();
});
  


function main() {
    
   $("#searchbutton").click(function() {
   
    var count = 0;
    var object_array = [];
    var query = $("#querybox").val();
    

    //Creates a spotter and gets it to insert tweets into the DOM
    
    var s = new Spotter("twitter.search",
			{q: query, period:120},
    			{buffer:true, bufferTimeout:750}
			);

    	s.register(function(tweet) {
		//Adds profile images (tweet.profile_image_url)

		
		var profile_image = "<img src='"+tweet.profile_image_url+"' />";

		
		//changes color of the tweet based on length of the search term

		var letter_count = $("#querybox").val().length;

		if (letter_count < 5) {
			color = "red";
		} else {
			color = "blue";
		}

		//if tweet.text contains the word love, then alert with a special message from the Beatles

		var tweet_text = tweet.text;
		if (tweet_text.indexOf("love")!=1)
		alert ("All you need is love!- The Beatles")

		var object = $("<p class='"+color+"'>"+profile_image+tweet.text+"</p>");
		object.hide();
		$("#tweets").prepend(object);
		object.fadeIn();
		object.slideDown();

		object_array.push(object);

		if (object_array.length > 5) {
			var object_to_remove = object_array.shift();
			object_to_remove.fadeOut(200, function() {
			object_to_remove.remove();
			});
		}
	});
  
	s.start();
  });	


   
}        
    
   	
	 
	
