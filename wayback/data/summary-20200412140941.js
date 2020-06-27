$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "8873",
				            "death": "265" ,
				            "date":"As of 12pm 4/11"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



