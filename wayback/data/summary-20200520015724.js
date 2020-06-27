$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "39,573",
				            "death": "1,913" ,
				            "dailycount": "1,183",
				            "dailydeath": "76" ,
				            "date":"05/19 Update" ,
				            "info":"Cases through 8:00pm 05/18/2020"				                      
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



