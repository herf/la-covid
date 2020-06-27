$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "9420",
				            "death": "320" ,
				            "date":"As of 12pm 4/13"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



