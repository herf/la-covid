$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "53,651",
				            "death": "2,338" ,
				            "dailycount": "2,112",
				            "dailydeath": "48" ,
				            "date":"05/30 Update" ,
				            "info":"Cases through 8:00pm 05/29/2020"				                      
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



