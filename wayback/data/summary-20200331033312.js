$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "2474",
				            "death": "44" ,
				            "date":"As of 12pm 3/30"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



