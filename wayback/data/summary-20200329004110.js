$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "1804",
				            "death": "32" ,
				            "date":"As of 12pm 3/28"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



