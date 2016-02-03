/**
 *
 * AayaamLabs Pvt. Ltd.
 *
 */

$(function(){

	window.secondsToTime = function(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
			}
	
	$("#ex2").slider({
		min : 0,
		max : 3600, //seconds
		step : 1
		
	});

	$('#ex2').on('slide',function(rangeVal){
        var min  = secondsToTime( rangeVal.value[0] );
        var max  = secondsToTime( rangeVal.value[1] );

        
        $('#video-min').text(min);
        $('#video-max').text(max);



        
    });

});