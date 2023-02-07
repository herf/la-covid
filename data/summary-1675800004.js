$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,682,742",


			"death": "35,355",

			"dailycount": "2,201",


			"dailydeath": "30",
			"hospitalizationsever": "170,883",


			"date": "02/06/23",
			"info": "through 12:00pm 02/05/2023",

			"testingaverage": "21,081",

			"peopletested": "12,900,681",

			"positivity": "5.08%",

			"hospitalizations": "675",
			"datehospitalizations": "2/3/23"

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



