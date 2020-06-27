$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "70,476",
				            "death": "2,832" ,
				            "dailycount": "1,633",
				            "dailydeath": "20" ,
				            "date":"06/12 Update" ,
				            "info":"Cases through 8:00pm 06/11/2020"				                      
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



