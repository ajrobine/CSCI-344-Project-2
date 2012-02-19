/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here
    //alert("hello world!");

    $("#search_button").click(function() {
    	alert($("#term").val());


	});

    var count = 0;

    var love_count = 0;

    var object_array = [];


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM

    var s = new Spotter("twitter.search",
    			{q:"bieber", period:120},
			{buffer:true, bufferTimeout:750}
			);

        

    s.register(function(tweet) {
        
	//2.  Add profile images (tweet.profile_image_url)

	count = count + 1;
	var color;

	var profile_image = "<img src='"+tweet.profile_image_url+"' />";

	if (count%2 === 0) {
	   color = "red";
	}  else  {
	     color = "blue";
	}

	var object = $("<p class='"+color+"'>"+profile_image+tweet.text+"</p>");
	object.hide();
	$("#tweets").prepend(object);
	object.slideDown();

	//check to see if tweet has the word 'love'

	

	if(tweet.text.match(/love/i) {
		love_count = love_count+1;
	}
	
	object_array.push(object);

	if(object_array.length > 4) {
	  var object_to_remove = object_array.shift();
	  object_to_remove.fadeOut(200, function() {
	     object_to_remove.remove();
	     });
	  }
	});

    s.start();

    

    

    //3. Make the tweets occur so the most recent are at the top
    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets


    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)

	
}

$(document).ready(function() {

main();
});
