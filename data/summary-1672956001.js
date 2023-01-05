$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "33,644,850",


			"death": "34,783",

			"dailycount": "3,602",


			"dailydeath": "28",
			"hospitalizationsever": "167,374",


			"date": "01/05/23",
			"info": "through 12:00pm 01/04/2023",

			"testingaverage": "17,170",

			"peopletested": "12,834,189",

			"positivity": "14.86%",

			"hospitalizations": "1,287",
			"datehospitalizations": "01/04/23"

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



