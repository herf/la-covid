$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,478,622",



			"death": "26,418",


			"dailycount": "948",



			"dailydeath": "4",



			"date": "10/18",
			"info": "through 6:00pm 10/17/2021",


			"testingaverage": "139,859",

			"peopletested": "8,903,829",

			"positivity": "0.85%",

			"hospitalizations": "638",
			"datehospitalizations": "10/16" 
 

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



