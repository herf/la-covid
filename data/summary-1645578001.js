$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,785,449",

			"death": "30,411",

			"dailycount": "1,188",

			"dailydeath": "36",


			"date": "02/22",
			"info": "through 6:00pm 02/21/2022",

			"testingaverage": "143,289",

			"peopletested": "11,365,877",

			"positivity": "2.78%",

			"hospitalizations": "1,276",
			"datehospitalizations": "02/21"

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



