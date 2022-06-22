$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,076,849",


			"death": "32,271",


			"dailycount": "5,575",


			"dailydeath": "8",
			"hospitalizationsever": "140,939",


			"date": "06/22",
			"info": "through 12:00pm 06/21/2022",

			"testingaverage": "66,483",

			"peopletested": "12,134,320",

			"positivity": "7.51%",

			"hospitalizations": "679",
			"datehospitalizations": "06/21"

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



