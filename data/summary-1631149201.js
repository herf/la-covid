$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,423,620",


			"death": "25,514",


			"dailycount": "2,006",


			"dailydeath": "49",

			"date": "09/08",
			"info": "through 6:00pm 09/07/2021",

			"testingaverage": "148,316",

			"peopletested": "8,272,500",

			"positivity": "1.87%",
			"hospitalizations": "1,433"




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
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



