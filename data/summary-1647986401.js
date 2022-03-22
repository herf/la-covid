$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,826,077",


			"death": "31,508",


			"dailycount": "429",


			"dailydeath": "17",



			"date": "03/22",
			"info": "through 6:00pm 03/21/2022",

			"testingaverage": "114,837",

			"peopletested": "11,618,534",

			"positivity": "0.65%",

			"hospitalizations": "404",
			"datehospitalizations": "03/21"

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



