$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,047,469",


			"death": "32,236",


			"dailycount": "5,693",


			"dailydeath": "9",
			"hospitalizationsever": "140,463",


			"date": "06/15",
			"info": "through 12:00pm 06/14/2022",

			"testingaverage": "124,927",

			"peopletested": "12,098,309",

			"positivity": "4.57%",

			"hospitalizations": "606",
			"datehospitalizations": "06/14"

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



