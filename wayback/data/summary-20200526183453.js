$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "46,018",
				            "death": "2,116" ,
				            "dailycount": "1,047",
				            "dailydeath": "12" ,
				            "date":"05/25 Update" ,
				            "info":"Cases through 8:00pm 05/24/2020"				                      
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



