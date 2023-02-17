$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,693,237",


			"death": "35,528",

			"dailycount": "1,144",


			"dailydeath": "20",
			"hospitalizationsever": "172,173",


			"date": "02/16/23",
			"info": "through 12:00pm 02/15/2023",

			"testingaverage": "18,647",

			"peopletested": "12,919,026",

			"positivity": "5.82%",

			"hospitalizations": "699",
			"datehospitalizations": "2/15/23"

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



