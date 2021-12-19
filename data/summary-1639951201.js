$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,563,879",



			"death": "27,441",



			"dailycount": "3,512",



			"dailydeath": "9",

			"date": "12/19",
			"info": "through 6:00pm 12/18/2021",


			"testingaverage": "149,627",


			"peopletested": "9,814,657",

			"positivity": "1.23%",

			"hospitalizations": "742",
			"datehospitalizations": "12/17"

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



