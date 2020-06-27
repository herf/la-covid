$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "40,857",
				            "death": "1,970" ,
				            "dailycount": "1,324",
				            "dailydeath": "57" ,
				            "date":"05/20 Update" ,
				            "info":"Cases through 8:00pm 05/19/2020"				                      
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



