// Object Literal
var myObjLiteral = {
  defaults: { name: 'Dan' },
  someMethod: function(){
    console.log(this.defaults);
  }
};


// Anonymous Object Literal return
var Module = (function(){

  var privateMethod = function(){
    console.log('oi');
  };

  return {
    publicMethodOne: function(){
      privateMethod();
    }
    publicMethodTwo: function(){};
    publicMethodThree: function(){};
  }
})();


// Locally scoped Object Literal
var Module1 = (function(){

  //locally scoped Object
  var myObject = {};

  //declared with 'var' must be private
  var privateMethod = function(){};

  myObject.someMethod = function(){
    //take it away mr. public method
  }

  return myObject;

})();
