$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "27,815",
				            "death": "1,313" ,
				            "date":"05/05 Update" ,
				            "info":"Cases through 8:00pm 05/04/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



