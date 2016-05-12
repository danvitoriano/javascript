function set() {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);
}

function myFunction() {
    alert(Math.random());
    var btn = document.getElementById("demo");
    btn.removeEventListener("click", myFunction);
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(set, 500);
