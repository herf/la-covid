$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "37,303",
				            "death": "1,793" ,
				            "dailycount": "1,073",
				            "dailydeath": "40" ,
				            "date":"05/16 Update" ,
				            "info":"Cases through 8:00pm 05/15/2020"				                      
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



