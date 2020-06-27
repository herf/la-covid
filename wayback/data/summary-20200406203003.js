$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "6360",
				            "death": "147" ,
				            "date":"As of 12pm 4/6"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



