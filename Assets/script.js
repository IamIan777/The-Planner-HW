$(document).ready(function() {

  $(".saveBtn").on("click", function() {
    
    var input = $(this).siblings(".description").val();
    console.log(input)
    var hour = $(this).parent().attr("id");
    console.log(hour);

    localStorage.setItem(hour, input);
  });

  var today = dayjs();
  $("#currentDay").text(today.format("[Today is] dddd, MMM D"));

  var moment = dayjs().hour();

  $("#to-do9").val(localStorage.getItem("hour9"));
  $("#to-do10").val(localStorage.getItem("hour10"));
  $("#to-do11").val(localStorage.getItem("hour11"));
  $("#to-do12").val(localStorage.getItem("hour12"));
  $("#to-do13").val(localStorage.getItem("hour13"));
  $("#to-do14").val(localStorage.getItem("hour14"));
  $("#to-do15").val(localStorage.getItem("hour15"));
  $("#to-do16").val(localStorage.getItem("hour16"));
  $("#to-do17").val(localStorage.getItem("hour17"));


  if ((moment) > 9) {
    $(hour9).css("background-color", "gray");
  } else if ((moment) < 9) {
    $(hour9).css("background-color", "green");
  } else if ((moment) = 9) {
    $(hour9).css("background-color", "red");
  } 


  if ((moment) > 10) {
    $(hour10).css("background-color", "gray");
  } else if ((moment) < 10) {
    $(hour10).css("background-color", "green");
  } else if ((moment) = 10) {
    $(hour10).css("background-color", "red");
  }


  if ((moment) > 11) {
    $(hour11).css("background-color", "gray");
  } else if ((moment) < 11) {
    $(hour11).css("background-color", "green");
  } else if ((moment) = 11) {
    $(hour11).css("background-color", "red");
  }


  if ((moment) > 12) {
    $(hour12).css("background-color", "gray");
  } else if ((moment) < 12) {
    $(hour12).css("background-color", "green");
  } else if ((moment) = 12) {
    $(hour12).css("background-color", "red");
  } 


  if ((moment) > 13) {
    $(hour13).css("background-color", "gray");
  } else if ((moment) < 13) {
    $(hour13).css("background-color", "green");
  } else if ((moment) = 13) {
    $(hour13).css("background-color", "red");
  } 


  if ((moment) > 14) {
    $(hour14).css("background-color", "gray");
  } else if ((moment) < 14) {
    $(hour14).css("background-color", "green");
  } else if ((moment) = 14) {
    $(hour14).css("background-color", "red");
  } 


  if ((moment) > 15) {
    $(hour15).css("background-color", "gray");
  } else if ((moment) < 15) {
    $(hour15).css("background-color", "green");
  } else if ((moment) = 15) {
    $(hour15).css("background-color", "red");
  }


  if ((moment) > 16) {
    $(hour16).css("background-color", "gray");
  } else if ((moment) < 16) {
    $(hour16).css("background-color", "green");
  } else if ((moment) = 16) {
    $(hour16).css("background-color", "red");
  }


  if ((moment) > 17) {
    $(hour17).css("background-color", "gray");
  } else if ((moment) < 17) {
    $(hour17).css("background-color", "green");
  } else if ((moment) = 17) {
    $(hour17).css("background-color", "red");
  }


})