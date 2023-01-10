$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,653,463",


			"death": "34,888",

			"dailycount": "1,383",


			"dailydeath": "21",
			"hospitalizationsever": "167,865",


			"date": "01/10/23",
			"info": "through 12:00pm 01/09/2023",

			"testingaverage": "18,665",

			"peopletested": "12,844,876",

			"positivity": "12.78%",

			"hospitalizations": "1,101",
			"datehospitalizations": "01/09/23"

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



