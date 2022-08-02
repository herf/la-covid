$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,309,285",


			"death": "32,763",


			"dailycount": "3,227",


			"dailydeath": "17",
			"hospitalizationsever": "146,671",


			"date": "8/2",
			"info": "through 12:00pm 8/1/2022",

			"testingaverage": "43,882",

			"peopletested": "12,349,250",

			"positivity": "15.11%",

			"hospitalizations": "1,242",
			"datehospitalizations": "8/01"

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



