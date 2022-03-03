$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,799,169",

			"death": "30,853",

			"dailycount": "1,626",

			"dailydeath": "80",


			"date": "03/02",
			"info": "through 6:00pm 03/01/2022",

			"testingaverage": "126,386",

			"peopletested": "11,443,397",

			"positivity": "1.69%",

			"hospitalizations": "263",
			"datehospitalizations": "03/01"

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



