$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,403,028",


			"death": "33,124",


			"dailycount": "1,337",


			"dailydeath": "5",
			"hospitalizationsever": "151,999",


			"date": "8/29",
			"info": "through 12:00pm 8/28/2022",

			"testingaverage": "37,860",

			"peopletested": "12,461,856",

			"positivity": "8.98%",

			"hospitalizations": "889",
			"datehospitalizations": "8/26"

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



