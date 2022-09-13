$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,431,991",


			"death": "33,398",


			"dailycount": "1,601",


			"dailydeath": "13",
			"hospitalizationsever": "154,092",


			"date": "9/13",
			"info": "through 12:00pm 9/12/2022",

			"testingaverage": "32,110",

			"peopletested": "12,510,581",

			"positivity": "6.38%",

			"hospitalizations": "735",
			"datehospitalizations": "9/12"

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



