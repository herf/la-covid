$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,041,815",


			"death": "32,227",


			"dailycount": "3,310",


			"dailydeath": "9",
			"hospitalizationsever": "140,231",


			"date": "06/14",
			"info": "through 12:00pm 06/13/2022",

			"testingaverage": "132,289",

			"peopletested": "12,092,069",

			"positivity": "4.34%",

			"hospitalizations": "579",
			"datehospitalizations": "06/13"

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



