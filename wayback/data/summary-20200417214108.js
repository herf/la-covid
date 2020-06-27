$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "11,391",
				            "death": "495" ,
				            "date":"As of 12pm 4/17"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



