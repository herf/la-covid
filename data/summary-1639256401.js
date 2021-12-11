$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,545,583",



			"death": "27,325",



			"dailycount": "1,834",



			"dailydeath": "23",

			"date": "12/11",
			"info": "through 6:00pm 12/10/2021",


			"testingaverage": "159,993",


			"peopletested": "9,581,688",

			"positivity": "1.11%",

			"hospitalizations": "684",
			"datehospitalizations": "12/09"

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



