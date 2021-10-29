$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,489,380",



			"death": "26,598",


			"dailycount": "1,887",



			"dailydeath": "20",



			"date": "10/28",
			"info": "through 6:00pm 10/27/2021",


			"testingaverage": "143,392",


			"peopletested": "9,020,965",

			"positivity": "0.80%",

			"hospitalizations": "649",
			"datehospitalizations": "10/26" 
 

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



