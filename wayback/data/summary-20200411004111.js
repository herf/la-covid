$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "8430",
				            "death": "241" ,
				            "date":"As of 12pm 4/10"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



