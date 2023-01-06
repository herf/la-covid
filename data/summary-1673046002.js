$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,646,917",


			"death": "34,783",

			"dailycount": "2,101",


			"dailydeath": "24",
			"hospitalizationsever": "167,456",


			"date": "01/06/23",
			"info": "through 12:00pm 01/05/2023",

			"testingaverage": "17,227",

			"peopletested": "12,836,893",

			"positivity": "14.79%",

			"hospitalizations": "1,212",
			"datehospitalizations": "01/05/23"

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



