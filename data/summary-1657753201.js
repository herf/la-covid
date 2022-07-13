$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,189,901",


			"death": "32,478",


			"dailycount": "6,530",


			"dailydeath": "15",
			"hospitalizationsever": "143,602",


			"date": "07/13",
			"info": "through 12:00pm 07/12/2022",

			"testingaverage": "40,965",

			"peopletested": "12,243,909",

			"positivity": "14.86%",

			"hospitalizations": "1,170",
			"datehospitalizations": "07/12"

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



