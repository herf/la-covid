$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,829,091",


			"death": "31,576",


			"dailycount": "889",


			"dailydeath": "21",



			"date": "03/25",
			"info": "through 6:00pm 03/24/2022",

			"testingaverage": "113,414",

			"peopletested": "11,651,007",

			"positivity": "0.63%",

			"hospitalizations": "351",
			"datehospitalizations": "03/24"

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



