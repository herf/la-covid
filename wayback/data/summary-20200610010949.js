$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "65,822",
				            "death": "2,707" ,
				            "dailycount": "1,225",
				            "dailydeath": "56" ,
				            "date":"06/09 Update" ,
				            "info":"Cases through 8:00pm 06/08/2020"				                      
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



