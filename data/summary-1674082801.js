$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,663,899",


			"death": "35,052",

			"dailycount": "1,414",


			"dailydeath": "21",
			"hospitalizationsever": "168,932",


			"date": "01/18/23",
			"info": "through 12:00pm 01/17/2023",

			"testingaverage": "24,181",

			"peopletested": "12,861,327",

			"positivity": "6.76%",

			"hospitalizations": "958",
			"datehospitalizations": "01/17/23"

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



