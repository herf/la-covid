$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,784,276",

			"death": "30,376",

			"dailycount": "1,345",

			"dailydeath": "21",


			"date": "02/21",
			"info": "through 6:00pm 02/20/2022",

			"testingaverage": "145,283",

			"peopletested": "11,361,052",

			"positivity": "3.01%",

			"hospitalizations": "1,310",
			"datehospitalizations": "02/20"

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



