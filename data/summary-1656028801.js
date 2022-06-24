$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,082,401",


			"death": "32,283",


			"dailycount": "5,621",


			"dailydeath": "12",
			"hospitalizationsever": "141,298",


			"date": "06/23",
			"info": "through 12:00pm 06/22/2022",

			"testingaverage": "56,404",

			"peopletested": "12,140,164",

			"positivity": "8.77%",

			"hospitalizations": "688",
			"datehospitalizations": "06/22"

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



