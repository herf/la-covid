$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,547,042",



			"death": "27,330",



			"dailycount": "1,460",



			"dailydeath": "5",

			"date": "12/12",
			"info": "through 6:00pm 12/11/2021",


			"testingaverage": "159,401",


			"peopletested": "9,596,550",

			"positivity": "1.13%",

			"hospitalizations": "707",
			"datehospitalizations": "12/10"

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



