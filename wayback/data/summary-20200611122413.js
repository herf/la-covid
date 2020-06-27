$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "67,064",
				            "death": "2,768" ,
				            "dailycount": "1,275",
				            "dailydeath": "61" ,
				            "date":"06/10 Update" ,
				            "info":"Cases through 8:00pm 06/09/2020"				                      
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



