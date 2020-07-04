$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "107,667",
				            "death": "3,454" ,
				            "dailycount": "2,204",
				            "dailydeath": "55" ,
				            "date":"07/02" ,
				            "info":"through 8:00pm 07/01/2020" ,			                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);			


});



