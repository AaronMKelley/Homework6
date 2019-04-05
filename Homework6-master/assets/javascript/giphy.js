
//Variables 
var topics=["John Krasinski","Al Pachino","Cate Blanchett","Melissa McCarthy","Tessa Thompson","Tom Hanks"];

// Create Intial For loop to put original array on the page

function makeButton(n){
  var b = $('<button class="button" ></button>');
  b.text(n)
  return(b);
}

for  (var i=0;i<topics.length;i++){
 var buttons = $('<button class="button" ></button>')
 buttons.text(topics[i]);
    $("#buttonArea").append(buttons)
}

//forum to add a new actor 
$("#actorName").on('keypress',function(e){
  if (e.which ===13){
  event.preventDefault();
  var name= $("#actorName").val()
  var actorButton= makeButton(name)
  topics.push(name)

  $("#buttonArea").append(actorButton)
  }
})


// }

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=Tom+Hanks&api_key=P4dbHw4FdiQldzFx33jULsJgBWuNGhDz&limit=10");
// xhr.done(function(data) { console.log("success got data", data); })


// var actor= $("#inputActor").val();

// var queryURL = "http://api.giphy.com/v1/gifs/search?q="+actor+"&api_key=P4dbHw4FdiQldzFx33jULsJgBWuNGhDz&limit=10&g"



var gif;
$(document).on('click', '#buttonArea button', function(){
  $("#gifs").empty();
  var actor =$(this).text()
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+actor+"&api_key=P4dbHw4FdiQldzFx33jULsJgBWuNGhDz&limit=10"
$.ajax({
url:queryURL,
method:"GET",
}).then(function(response) {
  console.log(response)
  for (var i=0;i<response.data.length;i++){
  var gif = $(' <img>').attr('src',response.data[i].images.fixed_height_small_still.url)
    gif.attr("id","gifImage")
    gif.attr("data-still",response.data[i].images.fixed_height_small_still.url,)
    gif.attr("data-anitmate",response.data[i].images.fixed_height_small.url)
    gif.attr("data-state","still")
    console.log(response.data[i].rating)
    $('#gifs').append(gif)
     $('#gifs').append("Rating:"+response.data[i].rating) ;
    
  }})
      

    })
    
    // function that switches gifs from still to animate and back. 
    $(document).on("click","#gifImage",function(){
      console.log(this)
      var state= $(this).attr("data-state")
    console.log(state)
    if (state =="still"){
        var anim = $(this).attr("data-anitmate")
        console.log(anim)
        $(this).attr('src',anim)
        $(this).attr('data-state',"animate")
      }else{var still = $(this).attr('data-still');
        $(this).attr('src', still)
       $(this).attr('data-state', 'still');
    
      }
     })