$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,421,995",


			"death": "33,227",


			"dailycount": "1,737",


			"dailydeath": "10",
			"hospitalizationsever": "152,896",


			"date": "9/7",
			"info": "through 12:00pm 9/6/2022",

			"testingaverage": "36,554",

			"peopletested": "12,491,326",

			"positivity": "7.41%",

			"hospitalizations": "777",
			"datehospitalizations": "9/2"

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



