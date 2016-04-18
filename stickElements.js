
    var stick = $('.btn-sign-up-now'),
        container = $('.btn-sign-up-now-container'),
        planBox = $('.plan-column'),
        findPlan = $(planBox).each(function() {
          this._bar = $(this).find(stick);
          this._ctn = $(this).find(container);
        });

    function fixpos() {
      findPlan.each(function(){

        var br = this.getBoundingClientRect();
        // $(this._bar).toggleClass("sticky", br.top<0 && br.bottom>0);
        var Hbreakpoint   = 150;
        var isFarEnough   = root.UI.getTopDistance() - br.height - Hbreakpoint;
        $(this._bar).toggleClass("sticky", br.top<0 && br.bottom>0);

        console.log('top=' + br.top + ' bottom=' + br.bottom + ' enough=' + isFarEnough);
      });
    }

    var pester = document.getElementById('pg2');
    var tester = document.getElementById('ag2');
    var bester = document.getElementById('abcde');

    var wrapper = document.getElementById('wrapper');

    window.onscroll = function() {
      wrapper.style.backgroundColor = checkVisible(tester) ? '#4f4' : '#f44';
    };
