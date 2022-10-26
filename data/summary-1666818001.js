$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,483,444",


			"death": "33,936",

			"dailycount": "928",


			"dailydeath": "11",
			"hospitalizationsever": "157,456",


			"date": "10/26",
			"info": "through 12:00pm 10/25/2022",

			"testingaverage": "26,481",

			"peopletested": "12,630,590",

			"positivity": "3.63%",

			"hospitalizations": "368",
			"datehospitalizations": "10/25"

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



