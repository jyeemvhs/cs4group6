let minimized = false;
let setOpen = false;
let timerOpen = false;
let helpOpen = false;


$(document).ready(function(){      
  console.log("ready to go");
});

//settings
function openSettings(){
  if(setOpen){
    $('#settings').css({"visibility":"hidden", "position":"absolute"});
    setOpen = false;
  }
  else{
    $('#settings').css({"visibility":"visible", "position":"absolute", "z-index":"2", "background-image":"url(../images/noteswindow.png)"});
    setOpen = true;
  }
 
}


//hint
function help(){
  //alert("Look around the apps on Wendy's computer for clues.\n\nTo escape notes, hit the x button. To resize the window, click the rectangle.");
  if(helpOpen){
    $('#help').css({"visibility":"hidden", "position":"absolute"});

    helpOpen = false;
  }
  else{
    $('#help').css({"visibility":"visible", "position":"absolute", "z-index":"2", "background-image":"url(../images/noteswindow.png)"});
    helpOpen = true;
  }

}

function success(data) { 
}
//notes
function saveNotes(){
    // $.get("/saveNotes", {notes: $("#textarea").val()}, success); 
  return false;
}
function retNotes(data) {
  console.log(data.notes);
    $("#textarea").val(data.notes); 
}
function openNotes(data){
  $('#notes').css({"visibility":"visible", "position":"absolute", "z-index":"2", "background-image":"url(../images/noteswindow.png)"});
  readNotes();
  // $.get("/retNotes",retNotes);
  $('#save').css({"visibility":"visible"});
  $('#textarea').css({"visibility":"visible", "width":"342px", "height":"161px"});
 
  return false;
}
function readNotes(){
  // console.log($('#drives').is(":checked"));
  $.ajax({
    url: "/read",
    type: "GET",
    data: {},
    success: function(data){
        if (data.error)
          alert("bad");
        else {
          $("#textarea").val(data.notes);
         
        }
      } ,     
    dataType: "json"
  });   
   return false;
 }
function closeNotes(){
  $('#notes').css({"visibility":"hidden", "position":"absolute"});
  $('textarea').val("");
  $('#save').css({"visibility":"hidden"});
  $('#textarea').css({"visibility":"hidden"});
}
function minimize(){
  if(minimized){
    $('#save').css({"visibility":"visible"});
    $('#textarea').css({"visibility":"visible","width":"342px", "height":"161px"});
    $('#notes').css({"width":"366px","height":"281px"});
    minimized = false;
  }
  else{
    $('#save').css({"visibility":"hidden"});
    $('#textarea').css({"visibility":"hidden"});
    $('#notes').css({"width":"100px","height":"80px"});
    minimized = true;
  }
}

// Make the DIV element draggable:
dragElement(document.getElementById("notes"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("notesHeading")) {
    document.getElementById("notesHeading").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//timer
function openTimer(){
  if(timerOpen){
    $('#timer').css({"visibility":"hidden", "position":"absolute"});
    timerOpen = false;
  }
  else{
    $('#timer').css({"visibility":"visible", "position":"absolute", "z-index":"2", "background-image":"url(../images/noteswindow.png)"});
    timerOpen = true;
  }
 
}





