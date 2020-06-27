$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "88,262",
				            "death": "3,171" ,
				            "dailycount": "2,364",
				            "dailydeath": "34" ,
				            "date":"06/23 Update" ,
				            "info":"Cases through 8:00pm 06/22/2020"				                      
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



