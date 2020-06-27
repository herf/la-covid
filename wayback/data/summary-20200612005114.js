$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "68,875",
				            "death": "2,813" ,
				            "dailycount": "1,857",
				            "dailydeath": "46" ,
				            "date":"06/11 Update" ,
				            "info":"Cases through 8:00pm 06/10/2020"				                      
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



