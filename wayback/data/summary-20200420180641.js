$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "12,341",
				            "death": "600" ,
				            "date":"As of 12pm 4/19"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



