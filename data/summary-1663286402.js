$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,435,551",


			"death": "33,432",

			"dailycount": "1,862",


			"dailydeath": "19",
			"hospitalizationsever": "154,592",


			"date": "9/15",
			"info": "through 12:00pm 9/14/2022",

			"testingaverage": "32,784",

			"peopletested": "12,518,281",

			"positivity": "5.83%",

			"hospitalizations": "677",
			"datehospitalizations": "9/14"

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



