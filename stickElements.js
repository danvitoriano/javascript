'use strict';

var StickElement = (function (root,$) {

  // stick element to page bottom when the same or other element is visible
  function stick() {

    // vars declaration
    var basicPlan = document.querySelector('#basic-plan-wrapper'),
        specializedPlan = document.querySelector('#specialized-plan-wrapper'),
        wrapBtnBasicPlan = basicPlan.querySelector('.btn-sign-up-wrapper'),
        wrapBtnSpecializedPlan = specializedPlan.querySelector('.btn-sign-up-wrapper'),
        btnBasicPlan = wrapBtnBasicPlan.querySelector('a'),
        btnSpecializedPlan = wrapBtnSpecializedPlan.querySelector('a');

    // check if the element is visible
    function checkVisible(elm) {
        // get element coordinates 
        var rect = elm.getBoundingClientRect();
        // calculate height with a -50px margin from top
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight) - 50;
        // return element position
        return !(rect.top < 0 || rect.top - viewHeight >= 0);
    }

    // sticky btn basic plan when basic plan wrapper is visible
    function BtnBasicPlanFixed(){
      if (checkVisible(basicPlan)) {
          $(btnBasicPlan).addClass("sticky");
      } else{
        $(btnBasicPlan).removeClass("sticky");
      }
    }

    // sticky btn specialized plan when specialized plan wrapper is visible
    function BtnSpecializedPlanFixed(){
      if (checkVisible(specializedPlan)) {
          $(btnSpecializedPlan).addClass("sticky");
      } else{
        $(btnSpecializedPlan).removeClass("sticky");
      }
    }

    // remove sticky element when btn basic plan wrapper is visible
    function WrapperBasicPlanFixed(){
      if (checkVisible(wrapBtnBasicPlan)) {
        $(btnBasicPlan).removeClass("sticky");
      }
    }

    // remove sticky element when btn specialized plan wrapper is visible
    function WrapperSpecializedPlanFixed(){
      if (checkVisible(wrapBtnSpecializedPlan)) {
        $(btnSpecializedPlan).removeClass("sticky");
      }
    }

    BtnBasicPlanFixed();
    BtnSpecializedPlanFixed();
    WrapperBasicPlanFixed();
    WrapperSpecializedPlanFixed();

  }

  function init() {
    stick();

    root.PubSub.subscribe('onScroll', stick);
    root.PubSub.subscribe('onResize', stick);
  }

  init();
})(app, $);

module.exports = StickElement;
