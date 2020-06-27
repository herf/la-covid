$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "61,045",
				            "death": "2,565" ,
				            "dailycount": "1,445",
				            "dailydeath": "36" ,
				            "date":"06/05 Update" ,
				            "info":"Cases through 8:00pm 06/04/2020"				                      
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



