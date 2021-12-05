$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,534,720",



			"death": "27,244",



			"dailycount": "2,037",



			"dailydeath": "20",

			"date": "12/04",
			"info": "through 6:00pm 12/03/2021",


			"testingaverage": "48,865",


			"peopletested": "9,487,400",

			"positivity": "2.11%",

			"hospitalizations": "572",
			"datehospitalizations": "12/02"

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



