$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,917,892",


			"death": "32,045",


			"dailycount": "2,233",


			"dailydeath": "8",


			"date": "05/17",
			"info": "through 6:00pm 05/16/2022",

			"testingaverage": "130,254",

			"peopletested": "11,939,643",

			"positivity": "2.44%",

			"hospitalizations": "327",
			"datehospitalizations": "05/16"

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



