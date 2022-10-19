$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,472,418",


			"death": "33,832",

			"dailycount": "N/A",


			"dailydeath": "N/A",
			"hospitalizationsever": "157,268",


			"date": "10/18",
			"info": "through 12:00pm 10/16/2022",

			"testingaverage": "27,054",

			"peopletested": "12,605,020",

			"positivity": "4.09%",

			"hospitalizations": "403",
			"datehospitalizations": "10/17"

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



