$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,520,504",


			"death": "27,017",


			"dailycount": "733",



			"dailydeath": "9",

			"date": "11/22",
			"info": "through 6:00pm 11/21/2021",


			"testingaverage": "137,700",


			"peopletested": "9,351,922",

			"positivity": "0.98%",

			"hospitalizations": "569",
			"datehospitalizations": "11/20"

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



