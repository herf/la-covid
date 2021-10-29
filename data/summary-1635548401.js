$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,490,698",



			"death": "26,626",


			"dailycount": "1,333",



			"dailydeath": "25",



			"date": "10/29",
			"info": "through 6:00pm 10/28/2021",


			"testingaverage": "141,355",


			"peopletested": "9,034,472",

			"positivity": "0.80%",

			"hospitalizations": "638",
			"datehospitalizations": "10/27" 
 

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



