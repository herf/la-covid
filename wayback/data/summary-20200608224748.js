$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "64,644",
				            "death": "2,655" ,
				            "dailycount": "823",
				            "dailydeath": "10" ,
				            "date":"06/08 Update" ,
				            "info":"Cases through 8:00pm 06/07/2020"				                      
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



