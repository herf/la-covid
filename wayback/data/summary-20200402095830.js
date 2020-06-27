$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "3518",
				            "death": "65" ,
				            "date":"As of 12pm 4/1"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



