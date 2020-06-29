$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "97,894",
				            "death": "3,305" ,
				            "dailycount": "2,542",
				            "dailydeath": "20" ,
				            "date":"06/28 Update" ,
				            "info":"Cases through 8:00pm 06/27/2020"				                      
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



