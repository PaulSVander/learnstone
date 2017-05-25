$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $(".card-search").submit(function(e) {
    console.log("REACHED 1")
    e.preventDefault();
    var url = $(this).attr("action")
    var method = $(this).attr("method")
    var data = $(this).serialize()
    $.ajax({
      url: url,
      method: method,
      data: data
    })
    .done(function(response) {
      $(".card-display").html(response)
    })
    $("#card-img").attr("src","http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-default.png")
  })
});
