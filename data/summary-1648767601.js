$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,833,206",


			"death": "31,669",


			"dailycount": "784",


			"dailydeath": "16",



			"date": "03/31",
			"info": "through 6:00pm 03/30/2022",

			"testingaverage": "110,184",

			"peopletested": "11,689,314",

			"positivity": "0.70%",

			"hospitalizations": "308",
			"datehospitalizations": "03/30"

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



