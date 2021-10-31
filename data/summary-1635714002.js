$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,493,170",



			"death": "26,637",


			"dailycount": "1,118",



			"dailydeath": "11",



			"date": "10/31",
			"info": "through 6:00pm 10/30/2021",


			"testingaverage": "140,310",


			"peopletested": "9,061,079",

			"positivity": "0.81%",

			"hospitalizations": "659",
			"datehospitalizations": "10/29" 
 

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



