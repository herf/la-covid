$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,525,486",



			"death": "27,128",



			"dailycount": "575",



			"dailydeath": "7",

			"date": "11/28",
			"info": "through 6:00pm 11/27/2021",


			"testingaverage": "133,908",


			"peopletested": "9,401,574",

			"positivity": "0.96%",

			"hospitalizations": "565",
			"datehospitalizations": "11/26"

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



