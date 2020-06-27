$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "36,259",
				            "death": "1,755" ,
				            "dailycount": "962",
				            "dailydeath": "47" ,
				            "date":"05/15 Update" ,
				            "info":"Cases through 8:00pm 05/14/2020"				                      
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



