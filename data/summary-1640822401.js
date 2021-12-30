$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,649,376",



			"death": "27,601",



			"dailycount": "16,510",



			"dailydeath": "25",

			"date": "12/29",
			"info": "through 6:00pm 12/28/2021",


			"testingaverage": "116,841",


			"peopletested": "9,988,713",

			"positivity": "6.50%",

			"hospitalizations": "1,069",
			"datehospitalizations": "12/27"

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



