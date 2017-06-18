$(document).ready(function(){

	//create an array of strings, each one related to a topic that interests you

	var nbaStar = ['Micheal Jordan','Stephen Curry','Kobe Bryant','Allen Iverson','Lebron James','Paul Pierce','Kevin Durant','Chris Paul','Carmelo Anthony','Kevin Garnett']
	

	var person = ""
	var allStars = $("<div>");
	var newBtn;
	var searchVal;	
	// var results = 
    // var starImage = $("<img>");

	

	var APIKey = "dc6zaTOxFJmzC";
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  	    person + "&api_key=dc6zaTOxFJmzC&limit=10";

	//1.take the topics in this array and create buttons in your HTML, try using a loop that appends 
	//a button for each string in the array
	for (var i = 0; i < nbaStar.length; i++) {
		var button = $('<button>').text(nbaStar[i])
		button.appendTo('.NBA-AllStars');
	}



	//2.When the user clicks on a button, the page should grab 10 static, non-animated gif images 
	//from the GIPHY API and place them on the page
	$("button").on("click", function() {

	var person = $(this).text();
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(person)
    
    $("#gifView").empty();

	$.ajax({
       url: queryURL,
  	   method: "GET"

       })

	.done(function(response) {
       	console.log(response)
       	console.log(response.data[3].images.fixed_height.url);

       	// grab data images/still response.data[]

 		var results = response.data;

		for (var i = 0; i < response.data.length; i++) {

		var starImage = $("<img>");
		
		var results = $('<img class="startImg">').attr("src", response.data[i].images.fixed_height_still.url); 
       	
       	starImage.attr("data-still", response.data[i].images.fixed_height.url);
		starImage.attr("data-animate", response.data[i].images.fixed_height.url);
		starImage.attr("data-convert", "still");


		var nbaDiv = $("<div>");

		// var rating = results[i].rating;

		// var p = $("<p>").text("Rating: " + results[i].rating);

		starImage.attr("src", 
			response.data[i].images.fixed_height.url);
		
		// nbaDiv.append(p);
        nbaDiv.append(starImage);

        $("#gifView").append(nbaDiv);
}




		// $(document).on('click', '.startImg', function() {


        $(document).on('click', function() {

        	console.log("I hate this")
            
            var state = $(this).attr('data-convert');
            
            if (state === 'still') {
                $(this).attr('src', $(this).attr('data-animate'));
                $(this).attr('data-state', 'animate');
            } else {
                $(this).attr('src', $(this).attr('data-still'));
                $(this).attr('data-state', 'still');
            }
        });

// function newButton(event) {
// 	searchVal = $('#search').val().trim();

// 	$('#search').blur();

// 		newBtn = $('<button class="btn btn-default btn-gif" data-subject="' + searchVal + '"><span>' + searchVal + '</span></button>');
// 		$('.row-btn').append(newBtn);
// 		ajaxQuery();
// 	$('#search').val('Search');

// 	searchFocus();
// 	$('.btn-gif').click(ajaxQuery);

// };

 // close newButton

// function searchFocus(){
// 	$('#search').focus(function() {
// 		if((($('#search').attr('value')) || ($('#search').val()))  == 'Search') {
// 			$('#search').attr('value', '');
// 			$('#search').val('');
// 		}
// 	});
// 	$('#search').blur(function() {
// 		if((($('#search').attr('value')) || ($('#search').val()))  == '') {
// 			$('#search').attr('value', 'Search');
// 			$('#search').val('Search');
// 		}
// 	});
	

// $(document).ready(function() {
// 	searchFocus();
// 	displayButtons();
// 	$('.btn-search').click(newButton);
// 	$('.btn-gif').click(ajaxQuery);
// 	// enter button
// 	$(document).keypress(function(e) {
// 		if(e.which === 13) {
// 			newButton();
// 		}
// 	});


});
});
});








