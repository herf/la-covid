$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,710,799",


			"death": "35,781",

			"dailycount": "900",


			"dailydeath": "10",
			"hospitalizationsever": "173,830",


			"date": "03/07/23",
			"info": "through 12:00pm 03/06/2023",

			"testingaverage": "17,847",

			"peopletested": "12,953,089",

			"positivity": "5.43%",

			"hospitalizations": "569",
			"datehospitalizations": "3/6/23"

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



