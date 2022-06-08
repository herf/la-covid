$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,014,758",


			"death": "32,186",


			"dailycount": "6,195",


			"dailydeath": "8",
			"hospitalizationsever": "139,918",


			"date": "06/08",
			"info": "through 12:00pm 06/07/2022",

			"testingaverage": "116,838",

			"peopletested": "12,060,276",

			"positivity": "4.26%",

			"hospitalizations": "555",
			"datehospitalizations": "06/07"

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



