$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "31,677",
				            "death": "1,530" ,
				            "date":"05/10 Update" ,
				            "info":"Cases through 8:00pm 05/09/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



