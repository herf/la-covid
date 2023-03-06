$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,709,883",


			"death": "35,771",

			"dailycount": "1,893",


			"dailydeath": "37",
			"hospitalizationsever": "173,616",


			"date": "03/06/23",
			"info": "through 12:00pm 03/05/2023",

			"testingaverage": "19,104",

			"peopletested": "12,951,938",

			"positivity": "5.29%",

			"hospitalizations": "649",
			"datehospitalizations": "3/3/23"

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



