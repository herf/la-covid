$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "4045",
				            "death": "78" ,
				            "date":"As of 12pm 4/2"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



