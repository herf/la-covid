$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,846,303",


			"death": "31,807",


			"dailycount": "742",


			"dailydeath": "7",


			"date": "04/11",
			"info": "through 6:00pm 04/10/2022",

			"testingaverage": "113,374",

			"peopletested": "11,758,096",

			"positivity": "0.84%",

			"hospitalizations": "265",
			"datehospitalizations": "04/10"

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



