$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,413,783",


			"death": "33,187",


			"dailycount": "2,705",


			"dailydeath": "16",
			"hospitalizationsever": "152,454",


			"date": "9/2",
			"info": "through 12:00pm 9/1/2022",

			"testingaverage": "38,708",

			"peopletested": "12,477,349",

			"positivity": "8.10%",

			"hospitalizations": "788",
			"datehospitalizations": "8/1"

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



