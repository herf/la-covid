$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,796,560",

			"death": "30,716",

			"dailycount": "2,833",

			"dailydeath": "67",


			"date": "02/27",
			"info": "through 6:00pm 02/26/2022",

			"testingaverage": "115,836",

			"peopletested": "11,427,642",

			"positivity": "2.09%",

			"hospitalizations": "916",
			"datehospitalizations": "02/27"

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



