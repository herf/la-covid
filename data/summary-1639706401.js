$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,553,366",



			"death": "27,388",



			"dailycount": "2,275",



			"dailydeath": "20",

			"date": "12/16",
			"info": "through 6:00pm 12/15/2021",


			"testingaverage": "153,662",


			"peopletested": "9,667,664",

			"positivity": "1.17%",

			"hospitalizations": "770",
			"datehospitalizations": "12/14"

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



