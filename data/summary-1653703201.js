$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,961,673",


			"death": "32,117",


			"dailycount": "5,800",


			"dailydeath": "8",


			"date": "05/27",
			"info": "through 12:00pm 05/26/2022",

			"testingaverage": "132,830",

			"peopletested": "11,999,130",

			"positivity": "3.34%",

			"hospitalizations": "455",
			"datehospitalizations": "05/26"

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



