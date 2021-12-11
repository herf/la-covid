$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,543,784",



			"death": "27,304",



			"dailycount": "1,924",



			"dailydeath": "16",

			"date": "12/10",
			"info": "through 6:00pm 12/09/2021",


			"testingaverage": "159,837",


			"peopletested": "9,565,329",

			"positivity": "1.10%",

			"hospitalizations": "667",
			"datehospitalizations": "12/08"

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



