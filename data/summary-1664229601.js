$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,450,411",


			"death": "33,565",

			"dailycount": "691",


			"dailydeath": "9",
			"hospitalizationsever": "155,594",


			"date": "9/26",
			"info": "through 12:00pm 9/25/2022",

			"testingaverage": "36,140",

			"peopletested": "12,552,499",

			"positivity": "4.39%",

			"hospitalizations": "548",
			"datehospitalizations": "9/23"

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



