$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "49,774",
				            "death": "2,241" ,
				            "dailycount": "1,094",
				            "dailydeath": "48" ,
				            "date":"05/28 Update" ,
				            "info":"Cases through 8:00pm 05/27/2020"				                      
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



