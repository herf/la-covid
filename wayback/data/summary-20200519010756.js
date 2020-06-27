$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "38,451",
				            "death": "1,839" ,
				            "dailycount": "477",
				            "dailydeath": "18" ,
				            "date":"05/18 Update" ,
				            "info":"Cases through 8:00pm 05/17/2020"				                      
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



