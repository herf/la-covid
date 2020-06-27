$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "18,517",
				            "death": "848" ,
				            "date":"As of 8pm 4/23"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



