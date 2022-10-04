$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,459,997",


			"death": "33,709",

			"dailycount": "1,133",


			"dailydeath": "12",
			"hospitalizationsever": "156,245",


			"date": "10/04",
			"info": "through 12:00pm 10/03/2022",

			"testingaverage": "33,635",

			"peopletested": "12,573,113",

			"positivity": "4.14%",

			"hospitalizations": "508",
			"datehospitalizations": "9/30"

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



