$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "1465",
				            "death": "26" ,
				            "date":"As of 12pm 3/27"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



