$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,701,570",


			"death": "35,642",

			"dailycount": "1,418",


			"dailydeath": "12",
			"hospitalizationsever": "172,632",


			"date": "02/24/23",
			"info": "through 12:00pm 02/23/2023",

			"testingaverage": "17,749",

			"peopletested": "12,933,142",

			"positivity": "6.12%",

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



