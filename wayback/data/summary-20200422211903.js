$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "16,435",
				            "death": "729" ,
				            "date":"As of 12pm 4/22"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



