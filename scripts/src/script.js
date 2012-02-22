$(document).ready(function() {

	main();
});
  


function main() {
    
   $("#searchbutton").click(function() {
   
    var count = 0;
    var object_array = [];
    var query = $("#querybox").val();
    alert(query);

    //Creates a spotter and gets it to insert tweets into the DOM
    
    var s = new Spotter("twitter.search",
			{q: query, period:120},
    			{buffer:true, bufferTimeout:750}
			);

    	s.register(function(tweet) {
		//Adds profile images (tweet.profile_image_url)

		count = count + 1;
		var color;
		var profile_image = "<img src='"+tweet.profile_image_url+"' />";

		if (count%2 === 0) {
			color = "red";
		} else {
			color = "blue";
		}

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
    
   	
	 
	
