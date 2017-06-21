$( document ).ready(function() {
    
    $('.playButton').on('click', function(){
 		$(this).parent().prev()[0].play();
    });

    $('.pauseButton').on('click', function(){
 		$(this).parent().prev()[0].pause();
    });   

    $('.rewindButton').on('click', function(){
 		$(this).parent().prev()[0].currentTime = 0;
    });   

	$('#sortVideos').on('click', function(){
	    $('#features .feature').sort(function(a, b){
			return $(a).first().text() > $(b).first().text();}).appendTo('#features');
	}); 

    //$('.inactive').hide();
    $( ".inactive" ).toggle( "fast" );
    $( ".topnavF" ).click(function() {
      $( ".inactive" ).toggle( "slow" );
    })
    // $('.topnavF').on('mouseover', 
    //     function() {
    //         $('.inactive').show();
    //     });
    // $('.topnavF').on('mouseleave', 
    //     function() {
    //         $('.inactive').hide();
    //     });

    console.log($('.inactive').length);

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}