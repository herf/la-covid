$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,289,045",



			"death": "28,086",


			"dailycount": "31,576",


			"dailydeath": "27",

			"date": "01/17",
			"info": "through 6:00pm 01/16/2022",

			"testingaverage": "244,226",


			"peopletested": "10,664,218",

			"positivity": "20.85%",


			"hospitalizations": "4,564",
			"datehospitalizations": "01/16"


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



