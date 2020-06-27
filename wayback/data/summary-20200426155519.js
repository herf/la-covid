$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "19,107",
				            "death": "895" ,
				            "date":"As of 8pm 4/24"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



