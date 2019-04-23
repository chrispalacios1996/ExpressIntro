"use strict";

$(document).ready(function() {
   console.log("jQuery is loaded !");

  $.post("http://localhost:3000/", "Hello server", function () {
  
   console.log("The server has responded!");

  });



});
