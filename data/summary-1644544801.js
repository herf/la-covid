$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,746,866",


			"death": "29,690",


			"dailycount": "6,276",

			"dailydeath": "81",

			"date": "02/10",
			"info": "through 6:00pm 02/09/2022",

			"testingaverage": "169,066",

			"peopletested": "11,231,255",

			"positivity": "6.41%",

			"hospitalizations": "2,464",
			"datehospitalizations": "02/09"

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



