$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "57,118",
				            "death": "2,443" ,
				            "dailycount": "1,202",
				            "dailydeath": "60" ,
				            "date":"06/02 Update" ,
				            "info":"Cases through 8:00pm 06/01/2020"				                      
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



