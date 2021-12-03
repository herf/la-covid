$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,530,526",



			"death": "27,208",



			"dailycount": "1,970",



			"dailydeath": "24",

			"date": "12/02",
			"info": "through 6:00pm 12/01/2021",


			"testingaverage": "52,776",


			"peopletested": "9,448,033",

			"positivity": "1.92%",

			"hospitalizations": "574",
			"datehospitalizations": "11/30"

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



