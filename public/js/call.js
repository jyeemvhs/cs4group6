let passed = false;

function call(){
  if($("#num1").val()== 1 && $("#num2").val()== 1 && $("#num3").val()== 9){
    passed = true;
  }
  else{
    alert("That's the wrong number!");
  }
  if(passed){
    document.location.href = 'resolution';
  }else{
    alert("you haven't unlocked this function yet.")
    document.location.href = 'OHNO';
  }

}



