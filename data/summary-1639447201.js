$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,548,157",



			"death": "27,341",



			"dailycount": "1,123",



			"dailydeath": "11",

			"date": "12/13",
			"info": "through 6:00pm 12/12/2021",


			"testingaverage": "154,612",


			"peopletested": "9,608,291",

			"positivity": "1.17%",

			"hospitalizations": "698",
			"datehospitalizations": "12/11"

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



