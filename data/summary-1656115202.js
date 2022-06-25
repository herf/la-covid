$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,088,482",


			"death": "32,291",


			"dailycount": "6,129",


			"dailydeath": "8",
			"hospitalizationsever": "141,355",


			"date": "06/24",
			"info": "through 12:00pm 06/23/2022",

			"testingaverage": "50,211",

			"peopletested": "12,147,886",

			"positivity": "9.78%",

			"hospitalizations": "741",
			"datehospitalizations": "06/23"

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



