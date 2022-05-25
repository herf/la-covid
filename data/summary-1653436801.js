$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,945,669",


			"death": "32,095",


			"dailycount": "3,589",


			"dailydeath": "9",


			"date": "05/24",
			"info": "through 6:00pm 05/23/2022",

			"testingaverage": "131,940",

			"peopletested": "11,979,049",

			"positivity": "2.97%",

			"hospitalizations": "419",
			"datehospitalizations": "05/23"

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



