$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "62,338",
				            "death": "2,620" ,
				            "dailycount": "1,329",
				            "dailydeath": "56" ,
				            "date":"06/06 Update" ,
				            "info":"Cases through 8:00pm 06/05/2020"				                      
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



