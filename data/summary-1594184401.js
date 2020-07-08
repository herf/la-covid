$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "120,539",
				            "death": "3,579" ,
				            "dailycount": "4,015",
				            "dailydeath": "46" ,
				            "date":"07/07" ,
				            "info":"through 8:00pm 07/06/2020" ,			                      
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



