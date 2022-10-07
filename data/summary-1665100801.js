$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,462,836",


			"death": "33,730",

			"dailycount": "1,822",


			"dailydeath": "12",
			"hospitalizationsever": "156,453",


			"date": "10/06",
			"info": "through 12:00pm 10/05/2022",

			"testingaverage": "32,443",

			"peopletested": "12,579,567",

			"positivity": "4.10%",

			"hospitalizations": "516",
			"datehospitalizations": "10/05"

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



