$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,665,365",


			"death": "35,079",

			"dailycount": "1,502",


			"dailydeath": "31",
			"hospitalizationsever": "169,328",


			"date": "01/19/23",
			"info": "through 12:00pm 01/18/2023",

			"testingaverage": "24,421",

			"peopletested": "12,863,504",

			"positivity": "6.35%",

			"hospitalizations": "918",
			"datehospitalizations": "01/18/23"

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



