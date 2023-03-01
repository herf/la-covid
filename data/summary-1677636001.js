$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,704,598",


			"death": "35,690",

			"dailycount": "921",


			"dailydeath": "15",
			"hospitalizationsever": "173,326",


			"date": "02/28/23",
			"info": "through 12:00pm 02/27/2023",

			"testingaverage": "16,886",

			"peopletested": "12,939,963",

			"positivity": "6.43%",

			"hospitalizations": "692",
			"datehospitalizations": "2/23/23"

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



