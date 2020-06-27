$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "1216",
				            "death": "21" ,
				            "date":"As of 12pm 3/26"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



