$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "79,609",
				            "death": "3,063" ,
				            "dailycount": "1,414",
				            "dailydeath": "38" ,
				            "date":"06/19 Update" ,
				            "info":"Cases through 8:00pm 06/18/2020"				                      
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



