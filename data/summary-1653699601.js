$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,955,954",


			"death": "32,109",


			"dailycount": "6,245",


			"dailydeath": "9",


			"date": "05/26",
			"info": "through 6:00pm 05/25/2022",

			"testingaverage": "131,795",

			"peopletested": "11,990,749",

			"positivity": "3.21%",

			"hospitalizations": "429",
			"datehospitalizations": "05/25"

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



