$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "44,055",
				            "death": "2,090" ,
				            "dailycount": "1,032",
				            "dailydeath": "41" ,
				            "date":"05/23 Update" ,
				            "info":"Cases through 8:00pm 05/22/2020"				                      
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



