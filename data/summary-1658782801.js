$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,268,588",


			"death": "32,637",


			"dailycount": "3,072",


			"dailydeath": "5",
			"hospitalizationsever": "145,645",


			"date": "07/25",
			"info": "through 12:00pm 07/24/2022",

			"testingaverage": "47,419",

			"peopletested": "12,312,493",

			"positivity": "15.63%",

			"hospitalizations": "1,200",
			"datehospitalizations": "07/22"

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



