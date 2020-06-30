$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "100,772",
				            "death": "3,326" ,
				            "dailycount": "2,903",
				            "dailydeath": "22" ,
				            "date":"06/29 Update" ,
				            "info":"Cases through 8:00pm 06/28/2020"				                      
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



