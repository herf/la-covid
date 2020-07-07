$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "116,570",
				            "death": "3,534" ,
				            "dailycount": "1,584",
				            "dailydeath": "48" ,
				            "date":"07/06" ,
				            "info":"through 8:00pm 07/05/2020" ,			                      
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



