$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "78,227",
				            "death": "3,027" ,
				            "dailycount": "1,051",
				            "dailydeath": "36" ,
				            "date":"06/18 Update" ,
				            "info":"Cases through 8:00pm 06/17/2020"				                      
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



