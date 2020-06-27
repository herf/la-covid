$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "20,976",
				            "death": "1,000" ,
				            "date":"As of 8pm 4/27"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



