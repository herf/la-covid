$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,456,275",



			"death": "26,047",



			"dailycount": "1,147",



			"dailydeath": "29",


			"date": "09/28",
			"info": "through 6:00pm 09/27/2021",

			"testingaverage": "121,780",

			"peopletested": "8,598,512",

			"positivity": "1.41%",

			"hospitalizations": "908",
			"datehospitalizations": "09/26"



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



