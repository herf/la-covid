$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,286,471",


			"death": "32,691",


			"dailycount": "7,009",


			"dailydeath": "18",
			"hospitalizationsever": "146,550",


			"date": "07/28",
			"info": "through 12:00pm 07/27/2022",

			"testingaverage": "46,441",

			"peopletested": "12,326,230",

			"positivity": "15.25%",

			"hospitalizations": "1,239",
			"datehospitalizations": "07/27"

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



