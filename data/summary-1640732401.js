$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,632,893",



			"death": "27,576",



			"dailycount": "9,473",



			"dailydeath": "22",

			"date": "12/28",
			"info": "through 6:00pm 12/27/2021",


			"testingaverage": "127,324",


			"peopletested": "9,963,268",

			"positivity": "4.72%",

			"hospitalizations": "966",
			"datehospitalizations": "12/26"

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



