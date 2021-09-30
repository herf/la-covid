$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,457,672",



			"death": "26,078",



			"dailycount": "1,436",



			"dailydeath": "31",


			"date": "09/29",
			"info": "through 6:00pm 09/28/2021",

			"testingaverage": "119,658",

			"peopletested": "8,623,434",

			"positivity": "1.40%",

			"hospitalizations": "892",
			"datehospitalizations": "09/27"



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



