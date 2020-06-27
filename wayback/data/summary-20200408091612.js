$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "6910",
				            "death": "169" ,
				            "date":"As of 12pm 4/7"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



