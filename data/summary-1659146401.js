$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,292,692",


			"death": "32,708",


			"dailycount": "6,399",


			"dailydeath": "18",
			"hospitalizationsever": "146,646",


			"date": "07/29",
			"info": "through 12:00pm 07/28/2022",

			"testingaverage": "45,785",

			"peopletested": "12,332,471",

			"positivity": "15.28%",

			"hospitalizations": "1,239",
			"datehospitalizations": "07/28"

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



