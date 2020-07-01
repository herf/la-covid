$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "103,529",
				            "death": "3,369" ,
				            "dailycount": "2,779",
				            "dailydeath": "45" ,
				            "date":"06/30" ,
				            "info":"through 8:00pm 06/29/2020" ,			                      
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



