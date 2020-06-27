$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "34,428",
				            "death": "1,659" ,
				            "date":"05/13 Update" ,
				            "info":"Cases through 8:00pm 05/12/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



