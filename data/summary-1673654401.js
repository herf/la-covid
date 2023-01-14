$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,659,260",


			"death": "34,969",

			"dailycount": "1,534",


			"dailydeath": "25",
			"hospitalizationsever": "168,519",


			"date": "01/13/23",
			"info": "through 12:00pm 01/12/2023",

			"testingaverage": "21,336",

			"peopletested": "12,852,693",

			"positivity": "9.43%",

			"hospitalizations": "1,053",
			"datehospitalizations": "01/12/23"

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



