$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,207,071",


			"death": "32,508",


			"dailycount": "8,954",


			"dailydeath": "16",
			"hospitalizationsever": "143,633",


			"date": "07/15",
			"info": "through 12:00pm 07/14/2022",

			"testingaverage": "42,068",

			"peopletested": "12,255,903",

			"positivity": "15.33%",

			"hospitalizations": "1,223",
			"datehospitalizations": "07/14"

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



