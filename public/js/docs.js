let num = " ";
let lives = 2;

document.querySelector('#crossword')
  .addEventListener('click', (ev) => {
    const [x, y] = [
      ev.target.cellIndex, 
      ev.target.parentElement.rowIndex
    ];
    if (x === undefined || y === undefined) {
      // Clicked on space between cells
      return;
    }
    console.log(x, y);
    var dataTable = $("#crossword");
    var rowNumber = y;  
    var columnNumber= x;   
    if($(dataTable[0].rows[rowNumber].cells[columnNumber]).hasClass('blank'))
    {
      console.log("hello");
      return;
    }
    dataTable[0].rows[rowNumber].cells[columnNumber].innerHTML = ""+ num;
  });

  $(window).bind("keypress", function(e) {
  var code = (e.keyCode ? e.keyCode : e.which); // which code?
  num = String.fromCharCode(code);
  $("#number").html("Value is "+ num);
  console.log(num); // which key, according to the code?
});

function checkwin(){
  let win = true;
  let table1 =[];
  let table2 =[];
  num = 0;
  num2 = 0;
  $("#crossword tr").each(function() 
      {
        $(this).find('td').each(function() {
            if ($(this).html() == " "){
                
            }else {
                table1[num] = $(this).html();
                num++;
            }
        });
      });
   $("#win tr").each(function() 
      {
        $(this).find('td').each(function() {
            if ($(this).html() == " "){
                
            }else {
                table2[num2] = $(this).html();
                num2++;
            }
        });
      }); 
    for( i=0;i<=table2.length ; i++) {
      if(table2[i] == table1[i]){
      }else{
        win = false;
      }
    }
    if (win){
      alert("You have completed this activity! Congratulations!!!");
    }else{
      $("#heart"+lives).css('visibility', 'hidden');
      lives--;
      if (lives == 0){
         document.location.href = "OHNO";
      }
    }
}

function hints(hit){
  console.log("made it here in hints");
  $("#blockquote").css('visibility', 'visible');
  $("#rcorners2").css('visibility', 'visible');

  if (hit == 1){
    $("#blockquote").text("‘I wandered lonely as a cloud’.I wandered lonely as a cloud  That floats on high o’er vales and hills, When all at once I saw a crowd, A host, of golden daffodils;  Beside the lake, beneath the trees, Fluttering and dancing in the breeze …  ~ wordsworth");
  }else if (hit == 2){
    $("#blockquote").text("When I have fears that I may cease to be Before my pen has glean'd my teeming brain, Before high-piled books, in charactery, Hold like rich garners the full ripen'd grain ~ keats");
  }else if (hit == 3){
    $("#blockquote").text("The Frost performs its secret ministry, Unhelped by any wind. The owlet’s cry Came loud—and hark, again! loud as before. The inmates of my cottage, all at rest, Have left me to that solitude, which suits Abstruser musings: save that at my side My cradled infant slumbers peacefully …  ~  coleridge");
  }else if (hit == 4){
    $("#blockquote").text("I want a hero: an uncommon want, When every year and month sends forth a new one, Till, after cloying the gazettes with cant, The age discovers he is not the true one; Of such as these I should not care to vaunt, I’ll therefore take our ancient friend Don Juan— We all have seen him, in the pantomime, Sent to the devil somewhat ere his time.  ~  lord byron");
  }else if (hit == 5){
    $("#blockquote").text(" Ye banks and braes o’ bonie Doon, How can ye bloom sae fresh and fair? How can ye chant, ye little birds, And I sae weary fu’ o’ care! Thou’ll break my heart, thou warbling bird, That wantons thro’ the flowering thorn: Thou minds me o’ departed joys, Departed never to return …  ~ burns");
  }
}
function closeHints(){
  $('#blockquote').css({"visibility":"hidden"});
  $('#rcorners2').css({"visibility":"hidden"});
}

$(document).ready(function() {
  console.log("in .reADY");
  $("#submit").click(checkwin);
});





