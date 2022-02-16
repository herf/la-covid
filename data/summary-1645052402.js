$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,769,372",

			"death": "30,081",

			"dailycount": "3,348",

			"dailydeath": "102",


			"date": "02/16",
			"info": "through 6:00pm 02/15/2022",

			"testingaverage": "154,917",

			"peopletested": "11,305,745",

			"positivity": "4.13%",

			"hospitalizations": "1,835",
			"datehospitalizations": "02/15"


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



