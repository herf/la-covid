$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,496,108",


			"death": "34,015",

			"dailycount": "2,978",


			"dailydeath": "16",
			"hospitalizationsever": "158,591",


			"date": "11/07",
			"info": "through 12:00pm 11/06/2022",

			"testingaverage": "26,948",

			"peopletested": "12,661,883",

			"positivity": "4.16%%",

			"hospitalizations": "437",
			"datehospitalizations": "11/04"

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



