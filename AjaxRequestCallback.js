<!DOCTYPE html>
<html>
<body>

<p id="demo">Let AJAX change this text.</p>

<button type="button"
onclick="loadDoc('ajax_info.txt', myFunction)">Change Content
</button>


<button type="button"
onclick="loadDoc('ajax_info.txt', myFunction3)">Back Content
</button>

<script>
function loadDoc(url, cfunc) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      cfunc(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("demo").innerHTML = xhttp.responseText;
  document.getElementById("demo").style.color = "green";
}
function myFunction3(xhttp) {
  document.getElementById("demo").innerHTML = xhttp.responseText;
  document.getElementById("demo").style.color = "red";
}
</script>

</body>
</html>
