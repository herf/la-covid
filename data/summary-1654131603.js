$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,980,708",


			"death": "32,136",


			"dailycount": "4,454",


			"dailydeath": "5",


			"date": "06/01",
			"info": "through 12:00pm 05/31/2022",

			"testingaverage": "133,245",

			"peopletested": "12,020,634",

			"positivity": "3.79%",

			"hospitalizations": "502",
			"datehospitalizations": "05/31"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



