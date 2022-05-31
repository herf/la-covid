$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,976,323",


			"death": "32,133",


			"dailycount": "2,151",


			"dailydeath": "4",


			"date": "05/31",
			"info": "through 12:00pm 05/30/2022",

			"testingaverage": "133,988",

			"peopletested": "12,017,244",

			"positivity": "3.67%",

			"hospitalizations": "479",
			"datehospitalizations": "05/30"

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



