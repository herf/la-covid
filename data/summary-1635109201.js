$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,485,105",



			"death": "26,549",


			"dailycount": "916",



			"dailydeath": "10",



			"date": "10/24",
			"info": "through 6:00pm 10/23/2021",


			"testingaverage": "144,454",


			"peopletested": "8,986,191",

			"positivity": "0.81%",

			"hospitalizations": "614",
			"datehospitalizations": "10/22" 
 

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



