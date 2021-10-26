$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,485,769",



			"death": "26,552",


			"dailycount": "679",



			"dailydeath": "5",



			"date": "10/25",
			"info": "through 6:00pm 10/24/2021",


			"testingaverage": "145,254",


			"peopletested": "8,993,694",

			"positivity": "0.82%",

			"hospitalizations": "610",
			"datehospitalizations": "10/23" 
 

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



