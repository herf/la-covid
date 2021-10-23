$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,483,031",



			"death": "26,513",


			"dailycount": "1,227",



			"dailydeath": "15",



			"date": "10/22",
			"info": "through 6:00pm 10/21/2021",


			"testingaverage": "144,102",

			"peopletested": "8,957,607",

			"positivity": "0.81%",

			"hospitalizations": "598",
			"datehospitalizations": "10/20" 
 

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



