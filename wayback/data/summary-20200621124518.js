$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "81,636",
				            "death": "3,110" ,
				            "dailycount": "2,056",
				            "dailydeath": "48" ,
				            "date":"06/20 Update" ,
				            "info":"Cases through 8:00pm 06/19/2020"				                      
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



