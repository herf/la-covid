$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,272,097",


			"death": "32,654",


			"dailycount": "3,547",


			"dailydeath": "17",
			"hospitalizationsever": "145,669",


			"date": "07/26",
			"info": "through 12:00pm 07/25/2022",

			"testingaverage": "46,924",

			"peopletested": "12,315,526",

			"positivity": "15.50%",

			"hospitalizations": "1,286",
			"datehospitalizations": "07/25"

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



