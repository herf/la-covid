$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "59,650",
				            "death": "2,531" ,
				            "dailycount": "1,469",
				            "dailydeath": "44" ,
				            "date":"06/04 Update" ,
				            "info":"Cases through 8:00pm 06/03/2020"				                      
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



