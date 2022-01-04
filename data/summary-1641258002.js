$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,757,522",




			"death": "27,647",




			"dailycount": "16,269",




			"dailydeath": "8",

			"date": "01/03",
			"info": "through 6:00pm 01/02/2022",


			"testingaverage": "91,705",


			"peopletested": "10,097,391",

			"positivity": "14.90%",

			"hospitalizations": "1,792",
			"datehospitalizations": "01/01"

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



