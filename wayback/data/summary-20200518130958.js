$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "37,974",
				            "death": "1,821" ,
				            "dailycount": "694",
				            "dailydeath": "29" ,
				            "date":"05/17 Update" ,
				            "info":"Cases through 8:00pm 05/16/2020"				                      
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



