$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,452,998",


			"death": "25,999",


			"dailycount": "1,602",


			"dailydeath": "29",

			"date": "09/25",
			"info": "through 6:00pm 09/24/2021",

			"testingaverage": "135,242",

			"peopletested": "8,564,061",

			"positivity": "1.36%",

			"hospitalizations": "956",
			"datehospitalizations": "09/22"




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



