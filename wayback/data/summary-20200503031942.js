$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "24,894",
				            "death": "1,209" ,
				            "date":"05/02 Update" ,
				            "info":"Cases through 8:00pm 05/01/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



