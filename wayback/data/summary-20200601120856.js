$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "54,996",
				            "death": "2,362" ,
				            "dailycount": "1,379",
				            "dailydeath": "25" ,
				            "date":"05/31 Update" ,
				            "info":"Cases through 8:00pm 05/30/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



