$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,451,726",


			"death": "33,576",

			"dailycount": "1,288",


			"dailydeath": "12",
			"hospitalizationsever": "155,606",


			"date": "9/27",
			"info": "through 12:00pm 9/26/2022",

			"testingaverage": "35,727",

			"peopletested": "12,554,051",

			"positivity": "4.35%",

			"hospitalizations": "496",
			"datehospitalizations": "9/26"

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



