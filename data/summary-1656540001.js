$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,112,364",


			"death": "32,325",


			"dailycount": "6,529",


			"dailydeath": "9",
			"hospitalizationsever": "141,396",


			"date": "06/29",
			"info": "through 12:00pm 06/28/2022",

			"testingaverage": "47,278",

			"peopletested": "12,172,802",

			"positivity": "10.88%",

			"hospitalizations": "779",
			"datehospitalizations": "06/28"

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



