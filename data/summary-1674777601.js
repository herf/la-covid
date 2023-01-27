$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,672,125",


			"death": "35,212",

			"dailycount": "1,095",


			"dailydeath": "23",
			"hospitalizationsever": "169,980",


			"date": "01/26/23",
			"info": "through 12:00pm 01/25/2023",

			"testingaverage": "22,591",

			"peopletested": "12,878,994",

			"positivity": "4.70%",

			"hospitalizations": "729",
			"datehospitalizations": "01/25/23"

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



