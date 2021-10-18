$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,477,686",



			"death": "26,414",





			"dailycount": "898",




			"dailydeath": "4",



			"date": "10/16",
			"info": "through 6:00pm 10/15/2021",


			"testingaverage": "140,345",

			"peopletested": "8,891,008",

			"positivity": "0.87%",

			"hospitalizations": "658",
			"datehospitalizations": "10/08" 
 

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



