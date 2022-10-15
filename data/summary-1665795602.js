$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,470,848",


			"death": "33,811",

			"dailycount": "1,329",


			"dailydeath": "15",
			"hospitalizationsever": "157,057",


			"date": "10/14",
			"info": "through 12:00pm 10/13/2022",

			"testingaverage": "27,450",

			"peopletested": "12,600,997",

			"positivity": "4.29%",

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



