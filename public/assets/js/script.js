

/* ------------------------------------------------------------
 * ADD BURGER FORM BUTTON CLICK
 * ------------------------------------------------------------ */

//creating burger
$("#add-burger button").on("click", function(event) { 
  event.preventDefault(); 
  let burgerName = $("#new-burger").val().trim();

  console.log(`Add Burger Button clicked: ${burgerName}`);

  $("#add-valid").addClass("active");

  if( burgerName !== "" ) {

    // AJAX post the data to the friends API.
    $.post("/api/burgers", {name: burgerName}, function(data) {
      console.log(`Created a new burger: ${burgerName}`);
      location.reload();
    });

    $("#add-valid").text("Burger added!");

  } else {
    $("#add-valid").text("Please enter a burger name.")
  }
});

/* ------------------------------------------------------------
 * BURGER BUTTONS
 * ------------------------------------------------------------ */

$(".burger button.change-devoured").on("click", function() {
  let id = $(this).data("id");
  let burger = $(this).children("p").text();
  
  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: {devoured: 1}
  }).then(
    function() {
      console.log("Ate burger: " + burger);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".burger button.delete").on("click", function() {
  let id = $(this).data("id");
  let burger = $(this).children("p").text();
  //delete burger
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then( function() {
    console.log("Deleting the burger " + burger);
    location.reload();
  })
});

$(".burger .rate").on("click", function() {
  console.log("Rating the burger " + $(this).data("id"));
});

// $(".burger form button").on("click", function() {
//   console.log("Reviewing the burger " + $(this).data("id"));
// });

