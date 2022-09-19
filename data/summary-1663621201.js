$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,441,113",


			"death": "33,483",

			"dailycount": "725",


			"dailydeath": "9",
			"hospitalizationsever": "154,839",


			"date": "9/19",
			"info": "through 12:00pm 9/18/2022",

			"testingaverage": "33,066",

			"peopletested": "12,531,772",

			"positivity": "5.65%",

			"hospitalizations": "674",
			"datehospitalizations": "9/16"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



