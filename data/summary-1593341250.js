$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "95,371",
				            "death": "3,285" ,
				            "dailycount": "2,169",
				            "dailydeath": "23" ,
				            "date":"06/27 Update" ,
				            "info":"Cases through 8:00pm 06/26/2020"				                      
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



