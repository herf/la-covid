$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,780,154",




			"death": "27,671",




			"dailycount": "21,790",




			"dailydeath": "24",

			"date": "01/04",
			"info": "through 6:00pm 01/03/2022",


			"testingaverage": "N/A (1/4/22)",


			"peopletested": "N/A (1/4/22)",

			"positivity": "N/A (1/4/22)",

			"hospitalizations": "1,994",
			"datehospitalizations": "01/02"

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



