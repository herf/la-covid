$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,815,379",

			"death": "31,372",

			"dailycount": "864",

			"dailydeath": "34",


			"date": "03/16",
			"info": "through 6:00pm 03/15/2022",

			"testingaverage": "120,132",

			"peopletested": "11,564,249",

			"positivity": "0.82%",

			"hospitalizations": "499",
			"datehospitalizations": "03/15"

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



