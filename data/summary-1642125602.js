$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,131,523",




			"death": "27,895",




			"dailycount": "45,076",




			"dailydeath": "45",

			"date": "01/13",
			"info": "through 6:00pm 01/12/2022",


			"testingaverage": "196,034",


			"peopletested": "10,494,089",

			"positivity": "21.16%",

			"hospitalizations": "4,175",
			"datehospitalizations": "01/12"

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



