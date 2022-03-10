$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,807,057",

			"death": "31,138",

			"dailycount": "1,157",

			"dailydeath": "55",


			"date": "03/09",
			"info": "through 6:00pm 03/08/2022",

			"testingaverage": "132,519",

			"peopletested": "11,503,635",

			"positivity": "1.02%",

			"hospitalizations": "666",
			"datehospitalizations": "03/08"

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



