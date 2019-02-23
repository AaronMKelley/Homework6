
//Variables 
topics=["John Kransinki","Al Pachino","cate blanchett","Melissa McCarthy"];

for  (var i=0;i<topics.length;i++){
    
    $('#inputs').(topics[i])
}

// $()



var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=P4dbHw4FdiQldzFx33jULsJgBWuNGhDz&limit=5");
xhr.done(function(data) { console.log("success got data", data); })


var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=P4dbHw4FdiQldzFx33jULsJgBWuNGhDz&limit=5"


console.log(queryURL);
$.ajax({
url:queryURL,
method:"GET",
}).then(function(data) {
  console.log(data.data[0].images.fixed_width.url)
//   var imageTest= $("img");
//   
  $("img").append(data.data[0].images.fixed_width.url)
});

// $('<img>').append(data[0].)