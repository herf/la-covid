$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,573,950",


			"death": "34,279",

			"dailycount": "3,450",


			"dailydeath": "17",
			"hospitalizationsever": "162,281",


			"date": "12/8",
			"info": "through 12:00pm 12/7/2022",

			"testingaverage": "33,032",

			"peopletested": "12,757,098",

			"positivity": "12.55%",

			"hospitalizations": "1,306",
			"datehospitalizations": "12/7"

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



