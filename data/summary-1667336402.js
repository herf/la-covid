$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,489,106",


			"death": "33,981",

			"dailycount": "868",


			"dailydeath": "7",
			"hospitalizationsever": "158,073",


			"date": "11/01",
			"info": "through 12:00pm 10/31/2022",

			"testingaverage": "27,363",

			"peopletested": "12,645,717",

			"positivity": "3.74%",

			"hospitalizations": "388",
			"datehospitalizations": "10/31"

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



