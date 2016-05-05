function doubleChar(str) {
  var text = "";
  for (i = 0; i < str.length; i++){
    text = text + str[i] + str[i];
  }
  return text;
}
