//Define Functions
    //get the scrollPos
    function scrollPos(){ $(window).scrollTop() }
    //find the position of the top of element
    function topPos(a){ var thistop = $(a).offset().top; return thistop; }
    //find the position of the bottom of element
    function bottomPos(a){ var thisbottom = $(a).offset().top + $(a).height(); return thisbottom; }
    
//JSON for Member List

    $('.diamond').click(function(){
        //change active class
        $(this).addClass('active');
        $('.diamond').not(this).removeClass('active');
        //clone content to fade in new content
        $('#memberinfo').append( $('.membercontent').clone() );
        //position the first element behind the second and fade it out
        $('#memberinfo').children('.membercontent').first().css('position','absolute').fadeOut();
        
        //only get the # of the ID
        var thisid = this.id;
        var x = thisid.replace( /^\D+/g, '');
        //get the information for the member clicked from JSON
        $.getJSON("js/members.json", function(data){
            var member = data.members[x];
            $('#memberinfo').children('.membercontent').last().find('#membername').html(member.name);
            $('#memberinfo').children('.membercontent').last().find('#memberposition').html(member.position);
            $('#memberinfo').children('.membercontent').last().find('#memberdescription').html(member.description);
            
            if( $('#memberinfo').is(':visible') ){
            //fade content in
            $('#memberinfo').children('.membercontent').last().hide().fadeIn();
            }
            else{
            //open content if not shown and hide first content for smoothness
            $('#memberinfo').slideDown().children('.membercontent').first().hide();
            }
        })
        
        //delay removal of previous content
        setTimeout(function(){$('#memberinfo').children('.membercontent').first().remove()},400)
    });

$('#memberinfo .close').click(function(){
    $('#memberinfo').slideUp();
    $('.diamond').removeClass('active');
});

//FadeIn the MenuBar on scroll
    $(window).scroll(function() {
        
        //check window size
        if( $( window ).width() > 768){
            if ( ($(this).scrollTop() < bottomPos('#top')) ) {$('nav.main').fadeOut('fast');}
            else {$('nav.main').fadeIn('fast');}
            }
        else{
            //removes display:none;
            $('nav.main').show();
        }
        
    });

//Initialize Smoothscroll
smoothScroll.init();