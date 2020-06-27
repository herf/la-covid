$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "63,844",
				            "death": "2,645" ,
				            "dailycount": "1,523",
				            "dailydeath": "25" ,
				            "date":"06/07 Update" ,
				            "info":"Cases through 2:00pm 06/06/2020"				                      
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



