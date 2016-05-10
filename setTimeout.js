function setText() {
    var elem = document.getElementById("demo");
    var val = elem.innerHTML;
    elem.innerHTML = "Hello World!";
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);
