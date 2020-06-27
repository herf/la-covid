$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "43,052",
				            "death": "2,049" ,
				            "dailycount": "1,072",
				            "dailydeath": "35" ,
				            "date":"05/22 Update" ,
				            "info":"Cases through 8:00pm 05/21/2020"				                      
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



