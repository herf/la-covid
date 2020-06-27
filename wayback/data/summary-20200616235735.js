$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "75,084",
				            "death": "2,959" ,
				            "dailycount": "1,337",
				            "dailydeath": "33" ,
				            "date":"06/16 Update" ,
				            "info":"Cases through 8:00pm 06/15/2020"				                      
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



