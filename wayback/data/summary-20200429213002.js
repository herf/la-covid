$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "22,485",
				            "death": "1,056" ,
				            "date":"As of 8pm 4/28"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



