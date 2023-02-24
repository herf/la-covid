$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,700,188",


			"death": "35,631",

			"dailycount": "1,753",


			"dailydeath": "18",
			"hospitalizationsever": "172,594",


			"date": "02/23/23",
			"info": "through 12:00pm 02/22/2023",

			"testingaverage": "17,706",

			"peopletested": "12,931,072",

			"positivity": "6.12%",

			"hospitalizations": "726",
			"datehospitalizations": "2/22/23"

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



