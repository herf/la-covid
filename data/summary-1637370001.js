$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,516,901",


			"death": "26,973",


			"dailycount": "1,612",



			"dailydeath": "26",

			"date": "11/19",
			"info": "through 6:00pm 11/18/2021",


			"testingaverage": "140,060",


			"peopletested": "9,307,667",

			"positivity": "0.98%",

			"hospitalizations": "611",
			"datehospitalizations": "11/17"

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



