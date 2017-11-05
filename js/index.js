update(culture);

$(function() {

  $('select').selectric({
    onChange: function(element) {
      var currentCulture = $("#culture-choice").val();
      console.log("currentCulture", currentCulture)
      update(currentCulture);
    }
  });

  $('.selectric-items ul li').on("mouseover", function(){
    console.log("li text", $(this).text());
    update($(this).text().replace(/\s/g, ''));
  });

  $('body').addClass("active");
  window.setTimeout(function(){
    $('.nav').addClass("active");
    $('.logo').addClass("active");
    $('.misc').addClass("active");
    window.setTimeout(function(){
      $('.card').addClass("active");
    }, 150);
  }, 150);

});
