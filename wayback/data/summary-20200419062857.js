$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "12,021",
				            "death": "576" ,
				            "date":"As of 12pm 4/18"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



