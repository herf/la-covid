$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "77,189",
				            "death": "2,991" ,
				            "dailycount": "2,129",
				            "dailydeath": "34" ,
				            "date":"06/17 Update" ,
				            "info":"Cases through 8:00pm 06/16/2020"				                      
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



