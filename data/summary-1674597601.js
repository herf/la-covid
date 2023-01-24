$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,669,720",


			"death": "35,167",

			"dailycount": "919",


			"dailydeath": "20",
			"hospitalizationsever": "169,685",


			"date": "01/24/23",
			"info": "through 12:00pm 01/23/2023",

			"testingaverage": "22,315",

			"peopletested": "12,872,893",

			"positivity": "5.22%",

			"hospitalizations": "761",
			"datehospitalizations": "01/23/23"

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



