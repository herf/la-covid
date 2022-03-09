$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,805,949",

			"death": "31,084",

			"dailycount": "852",

			"dailydeath": "39",


			"date": "03/08",
			"info": "through 6:00pm 03/07/2022",

			"testingaverage": "137,101",

			"peopletested": "11,493,681",

			"positivity": "1.12%",

			"hospitalizations": "706",
			"datehospitalizations": "03/07"

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



