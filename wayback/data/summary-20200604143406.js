$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "58,234",
				            "death": "2,489" ,
				            "dailycount": "1155",
				            "dailydeath": "46" ,
				            "date":"06/03 Update" ,
				            "info":"Cases through 8:00pm 06/02/2020"				                      
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



