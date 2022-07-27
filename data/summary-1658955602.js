$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,279,517",


			"death": "32,674",


			"dailycount": "7,316",


			"dailydeath": "20",
			"hospitalizationsever": "146,228",


			"date": "07/27",
			"info": "through 12:00pm 07/26/2022",

			"testingaverage": "46,826",

			"peopletested": "12,321,479",

			"positivity": "15.41%",

			"hospitalizations": "1,280",
			"datehospitalizations": "07/26"

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



