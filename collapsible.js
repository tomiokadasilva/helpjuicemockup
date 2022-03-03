$(document).ready(function(){
    $(".first-item").click(function(){
        $(".collapsible-list1 ul").toggleClass("active");
        $(".first-item").toggleClass("active");
        $(".arrow1").toggleClass("active");
    });
});

$(document).ready(function(){
  $(".second-item").click(function(){
      $(".collapsible-list2 ul").toggleClass("active");
      $(".second-item").toggleClass("active");
      $(".arrow2").toggleClass("active");
  });
});