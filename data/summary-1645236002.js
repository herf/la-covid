$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,777,165",

			"death": "30,216",

			"dailycount": "4,330",

			"dailydeath": "70",


			"date": "02/18",
			"info": "through 6:00pm 02/17/2022",

			"testingaverage": "150,275",

			"peopletested": "11,330,267",

			"positivity": "3.52%",

			"hospitalizations": "1,616",
			"datehospitalizations": "02/17"


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



