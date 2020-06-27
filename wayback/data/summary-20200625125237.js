$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "89,490",
				            "death": "3,205" ,
				            "dailycount": "1,260",
				            "dailydeath": "34" ,
				            "date":"06/24 Update" ,
				            "info":"Cases through 8:00pm 06/23/2020"				                      
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



