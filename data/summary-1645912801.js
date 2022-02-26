$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,793,776",

			"death": "30,650",

			"dailycount": "2,275",

			"dailydeath": "64",


			"date": "02/26",
			"info": "through 6:00pm 02/25/2022",

			"testingaverage": "136,313",

			"peopletested": "11,408,456",

			"positivity": "2.10%",

			"hospitalizations": "1,071",
			"datehospitalizations": "02/25"

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



