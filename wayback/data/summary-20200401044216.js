$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "3011",
				            "death": "54" ,
				            "date":"As of 12pm 3/31"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



