$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,838,442",


			"death": "31,739",


			"dailycount": "789",


			"dailydeath": "17",



			"date": "04/06",
			"info": "through 6:00pm 04/05/2022",

			"testingaverage": "103,565",

			"peopletested": "11,731,058",

			"positivity": "0.80%",

			"hospitalizations": "292",
			"datehospitalizations": "04/05"

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



