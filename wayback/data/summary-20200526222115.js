$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "47,822",
				            "death": "2,143" ,
				            "dailycount": "1,843",
				            "dailydeath": "27" ,
				            "date":"05/26 Update" ,
				            "info":"Cases through 8:00pm 05/25/2020"				                      
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



