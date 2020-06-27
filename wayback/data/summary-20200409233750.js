$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "7955",
				            "death": "223" ,
				            "date":"As of 12pm 4/9"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



