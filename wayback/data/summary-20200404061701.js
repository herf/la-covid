$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "4566",
				            "death": "89" ,
				            "date":"As of 12pm 4/3"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



