$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,677,849",


			"death": "35,294",

			"dailycount": "1,625",


			"dailydeath": "13",
			"hospitalizationsever": "170,408",


			"date": "02/01/23",
			"info": "through 12:00pm 01/31/2023",

			"testingaverage": "22,164",

			"peopletested": "12,890,733",

			"positivity": "4.55%",

			"hospitalizations": "747",
			"datehospitalizations": "01/31/23"

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



