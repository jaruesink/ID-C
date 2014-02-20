//Define Functions
    //change the window hash
    var changeHash = function(a){ document.location.hash = a };
    //get the scrollPos
    var scrollPos = function(){ $(window).scrollTop() };
    //find the position of the top of element
    var topPos = function(a){ var thistop = $(a).offset().top; return thistop; };
    //find the position of the bottom of element
    var bottomPos = function(a){ var thisbottom = $(a).offset().top + $(a).height(); return thisbottom; };


//FadeIn the MenuBar and change hash names on scroll
    $(window).scroll(function() {    
        if ($(this).scrollTop() < bottomPos('#top')) {$('.navbar').fadeOut('fast');}
        else {$('.navbar').fadeIn('fast');}
    });

//SmoothScroll
    $('a[href*=#]:not([href=#])').click(function() {
    var hashName = this.hash;
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(hashName);
      History.pushState();
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top}, 1000, function(){changeHash(hashName)});
        return false;
      }
    }
    });