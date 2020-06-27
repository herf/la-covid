$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "42,037",
				            "death": "2,016" ,
				            "dailycount": "1,204",
				            "dailydeath": "46" ,
				            "date":"05/21 Update" ,
				            "info":"Cases through 8:00pm 05/20/2020"				                      
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



