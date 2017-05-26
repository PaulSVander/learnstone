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

    })
    $(".card-search")[0].reset()
    $("#card-img").attr({
      src: "http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Esports.gif",
      width: 310,
      height: 432
    })

    $("#card-details-list").html(" ")
  })
});
