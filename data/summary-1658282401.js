$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,230,019",


			"death": "32,549",


			"dailycount": "4,327",


			"dailydeath": "12",
			"hospitalizationsever": "144,193",


			"date": "07/19",
			"info": "through 12:00pm 07/18/2022",

			"testingaverage": "47,594",

			"peopletested": "12,278,834",

			"positivity": "15.80%",

			"hospitalizations": "1,299",
			"datehospitalizations": "07/18"

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



