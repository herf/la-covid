$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "13,816",
				            "death": "617" ,
				            "date":"As of 12pm 4/20"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



