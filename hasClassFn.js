var test = document.getElementById("test"),
    classes = ['class1', 'class2', 'class3', 'class4'];

test.innerHTML = "";

for(var i = 0, j = classes.length; i < j; i++) {
    if(hasClass(test, classes[i])) {
        test.innerHTML = "I have " + classes[i];
        break;
    }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
