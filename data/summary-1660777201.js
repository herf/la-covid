$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,368,366",


			"death": "32,975",


			"dailycount": "4,829",


			"dailydeath": "15",
			"hospitalizationsever": "149,977",


			"date": "8/17",
			"info": "through 12:00pm 8/16/2022",

			"testingaverage": "38,121",

			"peopletested": "12,411,621",

			"positivity": "11.50%",

			"hospitalizations": "1,009",
			"datehospitalizations": "8/16"

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



