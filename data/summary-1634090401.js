$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,472,419",


			"death": "26,336",



			"dailycount": "742",


			"dailydeath": "16",


			"date": "10/12",
			"info": "through 6:00pm 10/11/2021",

			"testingaverage": "142,722",

			"peopletested": "8,804,818",

			"positivity": "0.93%",

			"hospitalizations": "667",
			"datehospitalizations": "10/10" 

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



