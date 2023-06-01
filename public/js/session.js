var now = new Date().getTime();
let dist = 60000;
var countDown = new Date(now + dist);
let paused = false;

playClicked();

function countDown1(){
  if(!paused){
    
    var now = new Date().getTime();
    var distance = countDown - now;
    dist = distance.toString();
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
    else{
      var days = Math.floor(dist / (1000 * 60 * 60 * 24));
      var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  
    let newTime = minutes + "m " + seconds + "s";

    $("#countDown").text(newTime);

    if (distance < 0) {
      clearInterval(x);
      $("#countdown").text("EXPIRED");
      //window.location ='./views/OHNO.html';
    }
}

var x = setInterval(countDown1, 1000);

function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){
                if (data.error){

                }
                  // alert("bad");
                else {
                  //console.log(data.ident + " " + data.gradeLevel);
                  // $("#identifier").val(data.ident);
                  // $("#gradeLevel").val(data.gradeLevel);
                  // $("#drives").prop("checked",data.drives);

                }
              } ,     
            dataType: "json"
          });   
  return false;
}
function updateClicked(){
 // console.log($('#drives').is(":checked"));
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {
              //identifier:$("#identifier").val(),
            // gradeLevel:$("#gradeLevel").val(),
            // drives:$('#drives').is(":checked")
            },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,     
            dataType: "json"
          });   
  return false;
}
function pauseClicked(){
  paused = true;
  $('#pauseScreen').css({"visibility":"visible", "position":"absolute"});
          $.ajax({
            url: "/updateTime",
            type: "PUT",
            data: {countDown:dist},
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
                  clearInterval(x);
                  x = 0;
                  // window.location ='./views/pause.html';
              } ,     
            dataType: "json"
          });   
  return false;
}
function playClicked(){
  paused = false;
  $('#pauseScreen').css({"visibility":"hidden", "position":"absolute"});
   $.ajax({
            url: "/readTime",
            type: "GET",
            data: {},
            success: function(data){
                if (data.error){
                  
                }
                  // alert("bad");
                else {
                  
                  dist = data.countDown;
//console.log(dist);
                  
                  resetTime();
                  x = setInterval(countDown1, 1000);
                  // console.log(x);
                  console.log("countdown= " + countDown);
                  // window.location ='./views/session.html';
                }
              } ,     
            dataType: "json"
          });   

  return false;
}
function resetTime(){
 // console.log(dist); 
  now = new Date().getTime();
//  console.log(now);
  countDown = new Date(now + dist);
 // console.log(countDown);
}


function logoutClicked(){
// console.log("session logoutClicked")
  pauseClicked();
  $.get("/logout",function(data){
// console.log("session logout function callback");    
    window.location = data.redirect;
  });
  return false;             
}

function saveClicked(){
  $.ajax({
    url: "/updateTime",
    type: "PUT",
    data: {countDown:dist,
    notes:$("#textarea").val()},
    success: function(data){
        if (data.error)
          alert("bad");
        else
          alert("good");
          // clearInterval(x);
          // x = 0;
          // window.location ='./views/pause.html';
      } ,     
    dataType: "json"
  });   

  // $.ajax({
  //   url: "/updateNotes",
  //   type: "PATCH",
  //   data: {
  //   notes:$("#textarea").val()
  //   },
  //   success: function(data){
  //       if (data.error)
  //         alert("bad");
  //       else
  //         alert("good");
  //     } ,     
  //   dataType: "json"
  // });   
    return false;             
  }
  

$(document).ready(function(){ 
  console.log("session doc ready")
  $("#dist").innerHTML = "distance";
  readClicked();
  $.get("/userInfo",function(data){
  // console.log("session get userInfo function callback");		
    if (data.username)
      $("#session").html("Session " + data.username);
      $("#username").html("User: " + data.username);
      $("#identifier").val(data.ident);
      $("#gradeLevel").val(data.gradeLevel);
	});

  // $("#drives").change(function(){
  //               console.log("new option selected");
  //              console.log($('#drives').is(":checked"));
        
  //   });

  // $("#readButton").click(readClicked);
  // $("#updateButton").click(updateClicked);
  $('#pauseButton').click(pauseClicked);
  $('#playButton').click(playClicked);


	$("#logout").click(logoutClicked);
  $("#logout2").click(logoutClicked);

  $("#save").click(saveClicked);

});  		
    


