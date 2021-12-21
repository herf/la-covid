$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,567,133",



			"death": "27,448",



			"dailycount": "3,258",



			"dailydeath": "7",

			"date": "12/20",
			"info": "through 6:00pm 12/19/2021",


			"testingaverage": "145,426",


			"peopletested": "9,830,056",

			"positivity": "1.30%",

			"hospitalizations": "743",
			"datehospitalizations": "12/18"

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



