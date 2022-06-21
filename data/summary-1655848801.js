$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,071,314",


			"death": "32,263",


			"dailycount": "2,294",


			"dailydeath": "2",
			"hospitalizationsever": "140,930",


			"date": "06/21",
			"info": "through 12:00pm 06/20/2022",

			"testingaverage": "79,133",

			"peopletested": "12,130,101",

			"positivity": "6.50%",

			"hospitalizations": "664",
			"datehospitalizations": "06/20"

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



