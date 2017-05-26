$(document).ready(function() {

  $(".card-search").submit(function(e) {
    e.preventDefault();
    $(".card-display").show()
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
      $(".card-search")[0].reset()
    })

    $("#card-img").attr({
      src: "http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-default.png",
      width: 290,
      height: 412
    })

    $("#card-details-list").html(" ")
  })
});
