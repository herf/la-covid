$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "73,018",
				            "death": "2,907" ,
				            "dailycount": "1,003",
				            "dailydeath": "17" ,
				            "date":"06/14 Update" ,
				            "info":"Cases through 8:00pm 06/13/2020"				                      
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



