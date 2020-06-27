$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "44,988",
				            "death": "2,104" ,
				            "dailycount": "940",
				            "dailydeath": "14" ,
				            "date":"05/24 Update" ,
				            "info":"Cases through 8:00pm 05/23/2020"				                      
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



