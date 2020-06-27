$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "10,854",
				            "death": "455" ,
				            "date":"As of 12pm 4/16"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



