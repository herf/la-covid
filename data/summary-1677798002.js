$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,706,685",


			"death": "35,720",

			"dailycount": "1,028",


			"dailydeath": "16",
			"hospitalizationsever": "173,587",


			"date": "03/02/23",
			"info": "through 12:00pm 03/01/2023",

			"testingaverage": "18,013",

			"peopletested": "12,944,499",

			"positivity": "6.05%",

			"hospitalizations": "643",
			"datehospitalizations": "3/1/23"

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



