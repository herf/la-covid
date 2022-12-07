$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,565,418",


			"death": "34,251",

			"dailycount": "3,125",


			"dailydeath": "10",
			"hospitalizationsever": "161,629",


			"date": "12/6",
			"info": "through 12:00pm 12/5/2022",

			"testingaverage": "26,958",

			"peopletested": "12,748,875",

			"positivity": "12.62%",

			"hospitalizations": "1,270",
			"datehospitalizations": "12/5"

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



