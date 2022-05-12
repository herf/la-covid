$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,900,449",


			"death": "32,007",


			"dailycount": "2,997",


			"dailydeath": "7",


			"date": "05/11",
			"info": "through 6:00pm 05/10/2022",

			"testingaverage": "128,241",

			"peopletested": "11,906,697",

			"positivity": "2.11%",

			"hospitalizations": "249",
			"datehospitalizations": "05/10"

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



