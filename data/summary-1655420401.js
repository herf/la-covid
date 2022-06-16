$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,051,930",


			"death": "32,245",


			"dailycount": "4,583",


			"dailydeath": "9",
			"hospitalizationsever": "140,468",


			"date": "06/16",
			"info": "through 12:00pm 06/15/2022",

			"testingaverage": "115,817",

			"peopletested": "12,104,376",

			"positivity": "4.82%",

			"hospitalizations": "605",
			"datehospitalizations": "06/15"

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



