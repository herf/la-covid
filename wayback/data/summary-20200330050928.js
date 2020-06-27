$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "2136",
				            "death": "37" ,
				            "date":"As of 12pm 3/29"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



