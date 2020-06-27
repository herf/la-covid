$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "55,968",
				            "death": "2,384" ,
				            "dailycount": "978",
				            "dailydeath": "22" ,
				            "date":"06/01 Update" ,
				            "info":"Cases through 8:00pm 05/31/2020"				                      
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



