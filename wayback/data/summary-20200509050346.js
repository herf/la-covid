$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "30,296",
				            "death": "1,468" ,
				            "date":"05/08 Update" ,
				            "info":"Cases through 8:00pm 05/07/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



