$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,437,648",


			"death": "33,447",

			"dailycount": "1,944",


			"dailydeath": "16",
			"hospitalizationsever": "154,595",


			"date": "9/16",
			"info": "through 12:00pm 9/15/2022",

			"testingaverage": "33,066",

			"peopletested": "12,522,412",

			"positivity": "5.65%",

			"hospitalizations": "669",
			"datehospitalizations": "9/15"

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



