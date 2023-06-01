let lives = 3;

function DoStuff(){
  console.log(lives);
  let valid = true;
  let cellID = ""+ $("#options").val();
  let row = cellID.substring(0,1);
  let col = cellID.substring(2);
  let squ = cellID.substring(1,2);

  if ($("#number").val() == ""){
    $("#error").html(" Number has to be Entered");
    return false; 
  }

  $("#theTable tr").each(function() 
    {
      $(this).find('td').each(function() {
        let id = "" + $(this).attr("id");
        let cellrow = id.substring(0,1);
        let cellcol = id.substring(2);
        let cellsqu = id.substring(1,2);

        if (cellrow == row){                  
          if ($("#number").val() == $(this).html()){
            $("#error").html(" Incorrect ");
            valid = false;
            return false; 
          }
        }else if (cellcol == col){ 
          if ($("#number").val() == $(this).html()){
            $("#error").html(" Incorrect ");
            valid = false;
            return false;
          } 
        }else if (cellsqu == squ){
          if ($("#number").val() == $(this).html()){
            $("#error").html(" Incorrect ");
            valid = false;
            return false;
          } 
        }
      });
    });
    
    if (valid){
      $("#error").html("");
      $("#"+cellID).html( value=$("#number").val())
    }else{
      $("#heart"+lives).css('visibility', 'hidden');
      lives--;
      if (lives == 0){
         document.location.href = "OHNO.html";
      }
    }

    let val=0;
    let list = [];
    $("#theTable tr").each(function(){
        $(this).find('td').each(function() {
            val++;
            list[val] = $(this).html();
        });
    });
    for (let i=0; i<list.length;i++){
        if(list[i] == "" || list[i] == null){
            list.splice(i,1);
            i--;
        }
    }
    if(list.length>=20){
      $("#won").html("1-1-9"); //some other clue for another game or a number for them to remember + one of the three access needed things to record
    }
  }









