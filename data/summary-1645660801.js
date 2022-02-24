$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,787,359",

			"death": "30,447",

			"dailycount": "1,934",

			"dailydeath": "36",


			"date": "02/23",
			"info": "through 6:00pm 02/22/2022",

			"testingaverage": "140,474",

			"peopletested": "11,375,101",

			"positivity": "2.56%",

			"hospitalizations": "1,204",
			"datehospitalizations": "02/22"

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



