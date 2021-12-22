$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,570,230",



			"death": "27,473",



			"dailycount": "3,052",



			"dailydeath": "25",

			"date": "12/21",
			"info": "through 6:00pm 12/20/2021",


			"testingaverage": "136,949",


			"peopletested": "9,839,004",

			"positivity": "1.44%",

			"hospitalizations": "741",
			"datehospitalizations": "12/19"

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



