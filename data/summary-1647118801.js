$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,811,864",

			"death": "31,275",

			"dailycount": "1,029",

			"dailydeath": "52",


			"date": "03/12",
			"info": "through 6:00pm 03/11/2022",

			"testingaverage": "124,651",

			"peopletested": "11,537,079",

			"positivity": "0.97%",

			"hospitalizations": "565",
			"datehospitalizations": "03/11"

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



