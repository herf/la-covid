$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,528,586",



			"death": "27,184",



			"dailycount": "1,473",



			"dailydeath": "18",

			"date": "12/01",
			"info": "through 6:00pm 11/30/2021",


			"testingaverage": "77,644",


			"peopletested": "9,434,249",

			"positivity": "1.52%",

			"hospitalizations": "562",
			"datehospitalizations": "11/29"

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
				$('#dte_3').html(content.datehospitalizations);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



