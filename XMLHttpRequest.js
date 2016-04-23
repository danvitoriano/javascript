var XHR = (function(){
  x = new XMLHttpRequest;
  x.responseType = "json";
  x.open('GET', searchUrl, true);
  x.onreadystatechange = function() {
    if (x.readyState === XMLHttpRequest.DONE && x.status === 200) {
      callback(x.responseText);
    }
  }
  
  x.send(null);
})();
