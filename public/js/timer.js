// var now = new Date().getTime();
// var countDown = new Date(now + 10*60000);

// // Update the count down every 1 second
// var x = setInterval(function() {
//   var now = new Date().getTime();
//   var distance = countDown - now;
 
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   $("#countdown").text(minutes + "m " + seconds + "s ");
//   $("#dist").text(distance);
//   console.log(distance);
//   if (distance < 0) {
//     clearInterval(x);
//     $("#countdown").innerHTML = "EXPIRED";
//     window.location ='./views/OHNO.html';
//   }
// }, 1000);

///after logging out, save the time to the user's object as a date object, when logging back in, replace countDown with saved object
// /routes.js
//convert the date object into a number(seconds)--> when reloading page with the user, replace 10*60000 in countDown with the saved number

//if time, make edges have red flashing lights ! warning signal