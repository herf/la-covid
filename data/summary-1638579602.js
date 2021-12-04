$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,532,430",



			"death": "27,225",



			"dailycount": "1,942",



			"dailydeath": "17",

			"date": "12/03",
			"info": "through 6:00pm 12/02/2021",


			"testingaverage": "47,338",


			"peopletested": "9,468,226",

			"positivity": "2.07%",

			"hospitalizations": "569",
			"datehospitalizations": "12/01"

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



