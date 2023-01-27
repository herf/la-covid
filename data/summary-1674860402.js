$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,673,339",


			"death": "35,230",

			"dailycount": "1,123",


			"dailydeath": "19",
			"hospitalizationsever": "169,988",


			"date": "01/27/23",
			"info": "through 12:00pm 01/26/2023",

			"testingaverage": "22,605",

			"peopletested": "12,881,377",

			"positivity": "4.57%",

			"hospitalizations": "722",
			"datehospitalizations": "01/26/23"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



