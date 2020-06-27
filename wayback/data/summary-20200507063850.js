$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "28,644",
				            "death": "1,367" ,
				            "date":"05/06 Update" ,
				            "info":"Cases through 8:00pm 05/05/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



