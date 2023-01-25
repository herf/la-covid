$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,670,949",


			"death": "35,189",

			"dailycount": "1,254",


			"dailydeath": "22",
			"hospitalizationsever": "169,965",


			"date": "01/25/23",
			"info": "through 12:00pm 01/24/2023",

			"testingaverage": "22,509",

			"peopletested": "12,874,723",

			"positivity": "4.91%",

			"hospitalizations": "761",
			"datehospitalizations": "01/23/23"

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



