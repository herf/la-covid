$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,521,197",


			"death": "27,046",


			"dailycount": "725",



			"dailydeath": "29",

			"date": "11/23",
			"info": "through 6:00pm 11/22/2021",


			"testingaverage": "136,019",


			"peopletested": "9,357,456",

			"positivity": "0.97%",

			"hospitalizations": "558",
			"datehospitalizations": "11/21"

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



