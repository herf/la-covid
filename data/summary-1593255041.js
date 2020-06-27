$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "93,232",
				            "death": "3,267" ,
				            "dailycount": "1,809",
				            "dailydeath": "25" ,
				            "date":"06/26 Update" ,
				            "info":"Cases through 8:00pm 06/25/2020"				                      
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



