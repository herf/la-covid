$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "73,791",
				            "death": "2,926" ,
				            "dailycount": "1,071",
				            "dailydeath": "19" ,
				            "date":"06/15 Update" ,
				            "info":"Cases through 8:00pm 06/14/2020"				                      
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



