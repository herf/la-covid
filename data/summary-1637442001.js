$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,518,732",


			"death": "26,999",


			"dailycount": "1,876",



			"dailydeath": "26",

			"date": "11/20",
			"info": "through 6:00pm 11/19/2021",


			"testingaverage": "139,958",


			"peopletested": "9,323,321",

			"positivity": "0.98%",

			"hospitalizations": "584",
			"datehospitalizations": "11/18"

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



