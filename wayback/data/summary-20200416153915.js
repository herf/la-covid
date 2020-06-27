$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "10,496",
				            "death": "402" ,
				            "date":"As of 12pm 4/15"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



