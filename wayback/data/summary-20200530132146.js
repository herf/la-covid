$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "51,562",
				            "death": "2,290" ,
				            "dailycount": "1,824",
				            "dailydeath": "50" ,
				            "date":"05/29 Update" ,
				            "info":"Cases through 8:00pm 05/28/2020"				                      
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



