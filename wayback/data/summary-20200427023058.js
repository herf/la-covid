$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "19,528",
				            "death": "913" ,
				            "date":"As of 8pm 4/25"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



