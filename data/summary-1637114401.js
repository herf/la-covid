$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,513,016",


			"death": "26,903",


			"dailycount": "893",



			"dailydeath": "35",

			"date": "11/16",
			"info": "through 6:00pm 11/15/2021",


			"testingaverage": "168,845",


			"peopletested": "9,265,204",

			"positivity": "0.88%",

			"hospitalizations": "632",
			"datehospitalizations": "11/14"

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



