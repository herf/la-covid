$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,720,216",


			"death": "29,364",


			"dailycount": "9,997",

			"dailydeath": "84",

			"date": "02/05",
			"info": "through 6:00pm 02/04/2022",

			"testingaverage": "184,225",

			"peopletested": "11,171,580",

			"positivity": "9.53%",

			"hospitalizations": "3,012",
			"datehospitalizations": "02/04"

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



