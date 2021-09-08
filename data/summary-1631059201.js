$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,421,616",


			"death": "25,465",


			"dailycount": "1,060",


			"dailydeath": "9",

			"date": "09/07",
			"info": "through 6:00pm 09/06/2021",


			"testingaverage": "149,026",


			"peopletested": "8,260,197",

			"positivity": "1.87%",
			"hospitalizations": "1,463"




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



