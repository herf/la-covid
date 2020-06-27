$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "91,467",
				            "death": "3,246" ,
				            "dailycount": "2,012",
				            "dailydeath": "42" ,
				            "date":"06/25 Update" ,
				            "info":"Cases through 8:00pm 06/24/2020"				                      
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



