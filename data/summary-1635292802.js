$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,486,614",



			"death": "26,572",


			"dailycount": "827",



			"dailydeath": "20",



			"date": "10/26",
			"info": "through 6:00pm 10/25/2021",


			"testingaverage": "143,601",


			"peopletested": "9,002,024",

			"positivity": "0.82%",

			"hospitalizations": "629",
			"datehospitalizations": "10/24" 
 

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



