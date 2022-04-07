$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,839,480",


			"death": "31,754",


			"dailycount": "1,088",


			"dailydeath": "15",



			"date": "04/07",
			"info": "through 6:00pm 04/06/2022",

			"testingaverage": "103,142",

			"peopletested": "11,737,033",

			"positivity": "0.82%",

			"hospitalizations": "273",
			"datehospitalizations": "04/06"

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



