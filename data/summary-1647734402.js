$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,823,354",


			"death": "31,462",


			"dailycount": "3269",


			"dailydeath": "25",



			"date": "03/19",
			"info": "through 6:00pm 03/18/2022",

			"testingaverage": "117,521",

			"peopletested": "11,601,177",

			"positivity": "0.72%",

			"hospitalizations": "432",
			"datehospitalizations": "03/18"

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



