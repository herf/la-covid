$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "7530",
				            "death": "198" ,
				            "date":"As of 12pm 4/8"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



