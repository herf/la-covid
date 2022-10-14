$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,469,663",


			"death": "33,797",

			"dailycount": "1,374",


			"dailydeath": "13",
			"hospitalizationsever": "157,055",


			"date": "10/13",
			"info": "through 12:00pm 10/12/2022",

			"testingaverage": "27,753",

			"peopletested": "12,598,059",

			"positivity": "4.33%",

			"hospitalizations": "455",
			"datehospitalizations": "10/12"

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



