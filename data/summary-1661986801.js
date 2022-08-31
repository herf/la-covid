$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,408,413",


			"death": "33,155",


			"dailycount": "3,237",


			"dailydeath": "17",
			"hospitalizationsever": "152,419",


			"date": "8/31",
			"info": "through 12:00pm 8/30/2022",

			"testingaverage": "38,296",

			"peopletested": "12,468,062",

			"positivity": "8.54%",

			"hospitalizations": "796",
			"datehospitalizations": "8/30"

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



