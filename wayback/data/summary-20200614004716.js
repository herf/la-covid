$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "72,023",
				            "death": "2,890" ,
				            "dailycount": "1,568",
				            "dailydeath": "58" ,
				            "date":"06/13 Update" ,
				            "info":"Cases through 8:00pm 06/12/2020"				                      
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



