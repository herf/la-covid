$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,985,665",


			"death": "32,146",


			"dailycount": "5,047",


			"dailydeath": "10",


			"date": "06/02",
			"info": "through 12:00pm 06/01/2022",

			"testingaverage": "132,782",

			"peopletested": "12,027,031",

			"positivity": "3.88%",

			"hospitalizations": "524",
			"datehospitalizations": "06/01"

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



