$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "85,942",
				            "death": "3,137" ,
				            "dailycount": "2,571",
				            "dailydeath": "18" ,
				            "date":"06/22 Update" ,
				            "info":"Cases through 8:00pm 06/21/2020"				                      
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



