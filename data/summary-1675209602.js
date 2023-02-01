$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,676,266",


			"death": "35,281",

			"dailycount": "701",


			"dailydeath": "17",
			"hospitalizationsever": "170,401",


			"date": "01/31/23",
			"info": "through 12:00pm 01/30/2023",

			"testingaverage": "22,350",

			"peopletested": "12,888,472",

			"positivity": "4.50%",

			"hospitalizations": "705",
			"datehospitalizations": "01/30/23"

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



