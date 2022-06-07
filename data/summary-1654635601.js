$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,008,619",


			"death": "32,178",


			"dailycount": "3,722",


			"dailydeath": "10",


			"date": "06/07",
			"info": "through 12:00pm 06/06/2022",

			"testingaverage": "113,685",

			"peopletested": "12,055,366",

			"positivity": "4.29%",

			"hospitalizations": "557",
			"datehospitalizations": "06/06"

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



