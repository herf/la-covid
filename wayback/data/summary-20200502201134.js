$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "24,215",
				            "death": "1,172" ,
				            "date":"05/01 Update" ,
				            "info":"Cases through 8:00pm 04/30/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



