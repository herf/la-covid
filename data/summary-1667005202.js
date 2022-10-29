$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,485,787",


			"death": "33,951",

			"dailycount": "1,220",


			"dailydeath": "11",
			"hospitalizationsever": "157,774",


			"date": "10/28",
			"info": "through 12:00pm 10/27/2022",

			"testingaverage": "26,916",

			"peopletested": "12,636,979",

			"positivity": "3.62%",

			"hospitalizations": "407",
			"datehospitalizations": "10/27"

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



