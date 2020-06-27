$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "10,047",
				            "death": "360" ,
				            "date":"As of 12pm 4/14"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



