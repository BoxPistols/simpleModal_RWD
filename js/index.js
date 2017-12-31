$(function() {
  $("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

  $("#glayLayer").click(function() {
    $(this).hide();
    $("#overLayer").hide();
  });

  $(".close").click(function() {
    // $("#glayLayer").hide();
    $("#overLayer").hide();
  });

  $("a.modal").click(function() {
    $alt = $(this)
      .find("img")
      .attr("alt");

    $("#glayLayer").show();
    $("#overLayer")
      .show()
      .html(
        "<img src='" +
          $(this).attr("href") +
          "'><div class='close'>x</div>" +
          '<span class="alt">' +
          $alt +
          "</span>"
      )
      .css({
        // "margin-top": "-" + $("#overLayer").height() / 2 + "px",
        // "margin-left": "-" + $("#overLayer").width() / 2 + "px"
      });

    $("#overLayer .close").click(function() {
      $("#glayLayer").hide();
      $("#overLayer").hide();
    });
    return false;
  });
});
