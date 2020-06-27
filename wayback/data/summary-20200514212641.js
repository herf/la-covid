$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "35,329",
				            "death": "1,709" ,
				            "dailycount": "925",
				            "dailydeath": "51" ,
				            "date":"05/14 Update" ,
				            "info":"Cases through 8:00pm 05/13/2020"				                      
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



