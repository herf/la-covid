$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,830,048",


			"death": "31,594",


			"dailycount": "789",


			"dailydeath": "22",



			"date": "03/26",
			"info": "through 6:00pm 03/25/2022",

			"testingaverage": "144,065",

			"peopletested": "11,660,061",

			"positivity": "0.63%",

			"hospitalizations": "373",
			"datehospitalizations": "03/25"

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



