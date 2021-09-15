$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,435,163",


			"death": "25,713",


			"dailycount": "1,725",


			"dailydeath": "27",

			"date": "09/14",
			"info": "through 6:00pm 09/13/2021",

			"testingaverage": "102,374",

			"peopletested": "8,382,009",

			"positivity": "2.09%",
			"hospitalizations": "1,224"




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



