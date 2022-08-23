$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,386,161",


			"death": "33,041",


			"dailycount": "2,314",


			"dailydeath": "14",
			"hospitalizationsever": "151,015",


			"date": "8/23",
			"info": "through 12:00pm 8/22/2022",

			"testingaverage": "38,559",

			"peopletested": "12,436,625",

			"positivity": "9.89%",

			"hospitalizations": "915",
			"datehospitalizations": "8/22"

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



