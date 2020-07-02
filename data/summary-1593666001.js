$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "105,507",
				            "death": "3,402" ,
				            "dailycount": "2,002",
				            "dailydeath": "35" ,
				            "date":"07/01" ,
				            "info":"through 8:00pm 06/30/2020" ,			                      
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



