$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "83,397",
				            "death": "3,120" ,
				            "dailycount": "1,784",
				            "dailydeath": "11" ,
				            "date":"06/21 Update" ,
				            "info":"Cases through 8:00pm 06/20/2020"				                      
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



