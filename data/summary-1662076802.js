$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,410,937",


			"death": "33,171",


			"dailycount": "2,566",


			"dailydeath": "17",
			"hospitalizationsever": "152,444",


			"date": "9/1",
			"info": "through 12:00pm 8/31/2022",

			"testingaverage": "38,392",

			"peopletested": "12,472,523",

			"positivity": "8.32%",

			"hospitalizations": "764",
			"datehospitalizations": "8/31"

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



