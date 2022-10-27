$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,484,615",


			"death": "33,945",

			"dailycount": "1,187",


			"dailydeath": "13",
			"hospitalizationsever": "157,768",


			"date": "10/27",
			"info": "through 12:00pm 10/26/2022",

			"testingaverage": "26,579",

			"peopletested": "12,634,175",

			"positivity": "3.66%",

			"hospitalizations": "390",
			"datehospitalizations": "10/26"

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



