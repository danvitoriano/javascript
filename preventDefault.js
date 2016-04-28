$("a").click(function() {
   $("body").append($(this).attr("href"));
   return false;
}

$("a").click(function(e) {
   $("body").append($(this).attr("href"));
   e.preventDefault();
}

// function return false

function() {
  return false;
}

// IS EQUAL TO

function(e) {
  e.preventDefault();
  e.stopPropagation();
}
