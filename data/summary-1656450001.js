$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,105,867",


			"death": "32,316",


			"dailycount": "3,671",


			"dailydeath": "9",
			"hospitalizationsever": "141,384",


			"date": "06/28",
			"info": "through 12:00pm 06/27/2022",

			"testingaverage": "47,333",

			"peopletested": "12,167,390",

			"positivity": "10.75%",

			"hospitalizations": "807",
			"datehospitalizations": "06/27"

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



