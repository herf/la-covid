$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,897,513",


			"death": "32,000",


			"dailycount": "2,044",


			"dailydeath": "4",


			"date": "05/10",
			"info": "through 6:00pm 05/09/2022",

			"testingaverage": "127,822",

			"peopletested": "11,901,706",

			"positivity": "2.02%",

			"hospitalizations": "252",
			"datehospitalizations": "05/09"

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



