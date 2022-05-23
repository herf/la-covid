$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,942,149",


			"death": "32,086",


			"dailycount": "2,476",


			"dailydeath": "7",


			"date": "05/23",
			"info": "through 6:00pm 05/22/2022",

			"testingaverage": "132,354",

			"peopletested": "11,974,373",

			"positivity": "2.86%",

			"hospitalizations": "391",
			"datehospitalizations": "05/22"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



