$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,506,305",



			"death": "26,796",


			"dailycount": "1,497",



			"dailydeath": "34",



			"date": "11/10",
			"info": "through 6:00pm 11/09/2021",


			"testingaverage": "126,499",


			"peopletested": "9,192,349",

			"positivity": "1.11%",

			"hospitalizations": "620",
			"datehospitalizations": "11/08" 
 

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



