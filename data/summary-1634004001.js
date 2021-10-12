$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,471,645",


			"death": "26,320",



			"dailycount": "826",


			"dailydeath": "8",


			"date": "10/11",
			"info": "through 6:00pm 10/10/2021",

			"testingaverage": "137,369",

			"peopletested": "8,794,178",

			"positivity": "0.99%",

			"hospitalizations": "656",
			"datehospitalizations": "10/09" 

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



