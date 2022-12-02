$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,547,200",


			"death": "34,199",

			"dailycount": "4,493",


			"dailydeath": "14",
			"hospitalizationsever": "161,040",


			"date": "12/1",
			"info": "through 12:00pm 11/30/2022",

			"testingaverage": "21,864",

			"peopletested": "12,730,533",

			"positivity": "10.80%",

			"hospitalizations": "1,164",
			"datehospitalizations": "11/30"

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



