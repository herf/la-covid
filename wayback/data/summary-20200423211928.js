$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "17,508",
				            "death": "797" ,
				            "date":"As of 12pm 4/23"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



