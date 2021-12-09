$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,540,200",



			"death": "27,275",



			"dailycount": "1,772",



			"dailydeath": "15",

			"date": "12/08",
			"info": "through 6:00pm 12/07/2021",


			"testingaverage": "127,107",


			"peopletested": "9,535,573",

			"positivity": "1.10%",

			"hospitalizations": "650",
			"datehospitalizations": "12/06"

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



