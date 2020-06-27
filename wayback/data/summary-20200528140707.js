$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "48,700",
				            "death": "2,195" ,
				            "dailycount": "933",
				            "dailydeath": "53" ,
				            "date":"05/27 Update" ,
				            "info":"Cases through 8:00pm 05/26/2020"				                      
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



