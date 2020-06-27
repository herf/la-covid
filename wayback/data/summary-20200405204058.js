$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "5277",
				            "death": "117" ,
				            "date":"As of 12pm 4/4"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



