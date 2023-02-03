$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,679,170",


			"death": "35,308",

			"dailycount": "1,354",


			"dailydeath": "14",
			"hospitalizationsever": "170,693",


			"date": "02/02/23",
			"info": "through 12:00pm 02/01/2023",

			"testingaverage": "21,444",

			"peopletested": "12,892,944",

			"positivity": "4.65%",

			"hospitalizations": "707",
			"datehospitalizations": "2/1/23"

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



