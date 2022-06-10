$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,019,550",


			"death": "32,193",


			"dailycount": "4,846",


			"dailydeath": "7",
			"hospitalizationsever": "139,923",


			"date": "06/09",
			"info": "through 12:00pm 06/08/2022",

			"testingaverage": "119,941",

			"peopletested": "12,065,480",

			"positivity": "4.22%",

			"hospitalizations": "595",
			"datehospitalizations": "06/08"

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



